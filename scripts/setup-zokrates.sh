#!/bin/sh

ZOKRATES_VERSION=""
GITHUB_OWNER="sCrypt-Inc"
GITHUB_REPO="zokrates"
GLOB_INST_DIR="/usr/local/bin"
LOCAL_INST_DIR="$HOME/.local/bin"
RES_DIR="$HOME/.zokrates"
BIN_NAME="zokrates"
SKIP_PROMPT=0
DISPLAY_HELP=0
UNINSTALL=0

while getopts "v:fhu" c; do
    case $c in
      v) ZOKRATES_VERSION="$OPTARG" ;;
      f) SKIP_PROMPT=1 ;;
      h) DISPLAY_HELP=1 ;;
      u) UNINSTALL=1 ;;
    esac
done

if [ $DISPLAY_HELP = 1 ]; then
    echo "Command options:"
    echo ""
    echo "-h Print help."
    echo "-v Version of ZoKrates to be installed."
    echo "-f Skip all prompts."
    echo "-u Uninstall ZoKrates."
    exit 0
fi

# If compiler version isn't explicitly specified, try to look up the latest stable rease on the web.
if [ -z $ZOKRATES_VERSION ]; then
    res=$(curl -s https://api.github.com/repos/sCrypt-Inc/zokrates/releases/latest | grep "tag_name" ) 
    ZOKRATES_VERSION=$(echo $res | cut -d'=' -f2 | sed -e "s/tag_name//g" -e "s/[\": ,v]//g")
fi
GITHUB_TAG="v$ZOKRATES_VERSION"

is_user_root () { [ "$(id -u)" -eq 0 ]; }

# Detect platform.
UNAME=$(uname)
if [ "$UNAME" = "Linux" -o "$UNAME" = "FreeBSD" ]; then
    URL_POSTFIX="zokrates-linux-x86_64.tar.gz"
elif [ "$UNAME" = "Darwin" ]; then

    MACOS_ARCHITECTURE=$(uname -m)
    if [ "$MACOS_ARCHITECTURE" = "arm64" ]; then
        URL_POSTFIX="zokrates-macos-aarch64.tar.gz"
    elif [ "$MACOS_ARCHITECTURE" = "x86_64" ]; then
        URL_POSTFIX="zokrates-macos-x86_64.tar.gz"
    else 
        echo "Darwin architecture \"$MACOS_ARCHITECTURE\" not supported." && exit 1
    fi
else
    echo "OS type \"$UNAME\" not supported." && exit 1
fi

# URL to download from.
DL_URL="https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/${GITHUB_TAG}/${URL_POSTFIX}"
if [ $(curl -o /dev/null -s -w "%{http_code}\n" $DL_URL) = "404" ]; then
    echo  "Version not found: $GITHUB_TAG"
    exit 1
fi

DL_URL_SRC="https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/archive/refs/tags/${GITHUB_TAG}.tar.gz"
echo $DL_URL_SRC

# Check if global or local install.
if ! is_user_root; then
    INSTALL_DIR="$LOCAL_INST_DIR"
else
    INSTALL_DIR="$GLOB_INST_DIR"
fi

# Create install dir if it doesn't exist yet.
mkdir -p $INSTALL_DIR

# Uninstallation procedure
if [ $UNINSTALL = 1 ]; then
    if [ -f "$INSTALL_DIR/$BIN_NAME" ]; then
        echo "You are about to uninstall ZoKrates which is currently installed at: $INSTALL_DIR/$BIN_NAME"
        echo
        if [ $SKIP_PROMPT = 0 ]; then
            read -p "Proceed? [y/n] " continue < /dev/tty || exit 2
            if [ ! $continue = "y" -a ! $continue = "Y" ]; then
                exit 3
            fi
        fi
        rm $INSTALL_DIR/$BIN_NAME
        echo "ZoKrates was successfully uninstalled."
        exit 0
    else
        echo "No installation found."
        exit 4
    fi
fi

# Installation procedure
echo "You are about to download and install ZoKrates $GITHUB_TAG for $UNAME."
echo
echo "The binary will be installed to $INSTALL_DIR/$BIN_NAME. Make sure, that the containing directory is in your PATH."
if [ -f "$INSTALL_DIR/$BIN_NAME" ]; then
    echo "An existing ZoKrates binary already exists in $INSTALL_DIR/$BIN_NAME. It will be overwritten."
fi
echo
if [ $SKIP_PROMPT = 0 ]; then
    read -p "Proceed with installation? [y/n] " continue < /dev/tty || exit 5
    if [ ! $continue = "y" -a ! $continue = "Y" ]; then
        exit 6
    fi
fi

# Remove old install if it exists.
if [ -f "$INSTALL_DIR/$BIN_NAME" ]; then
    rm $INSTALL_DIR/$BIN_NAME
fi

# Download and install ZoKrates.
curl -L -J $DL_URL -o $INSTALL_DIR/$URL_POSTFIX || exit 7
cd $INSTALL_DIR && tar -zxf $INSTALL_DIR/$URL_POSTFIX $BIN_NAME || exit 8
rm $INSTALL_DIR/$URL_POSTFIX || exit 9
chmod +x $INSTALL_DIR/$BIN_NAME || exit 10

# Download source and extract ZoKrates stdlib.
mkdir -p $RES_DIR
SRC_ARCHIVE="zokrates-${ZOKRATES_VERSION}.tar.gz"
STDLIB_PATH="zokrates-${ZOKRATES_VERSION}/zokrates_stdlib/stdlib"
curl -L -J $DL_URL_SRC -o $RES_DIR/$SRC_ARCHIVE || exit 11
cd $RES_DIR && tar -zxf $RES_DIR/$SRC_ARCHIVE $STDLIB_PATH || exit 12
rm -rf stdlib || exit 13
mv $RES_DIR/$STDLIB_PATH . || exit 14
rm $RES_DIR/$SRC_ARCHIVE || exit 15
rm -rf $RES_DIR/zokrates-${ZOKRATES_VERSION} || exit 16

echo
echo "ZoKrates ${GITHUB_TAG} was successfully installed."
