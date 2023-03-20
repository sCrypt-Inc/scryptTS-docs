#!/bin/sh

CIRCOM_VERSION=""
GITHUB_OWNER="iden3"
GITHUB_REPO="circom"
GLOB_INST_DIR="/usr/local/bin"
LOCAL_INST_DIR="$HOME/.local/bin"
RES_DIR="$HOME/.Circom"
BIN_NAME="circom"
SKIP_PROMPT=0
DISPLAY_HELP=0
UNINSTALL=0

while getopts "v:fhu" c; do
    case $c in
      v) CIRCOM_VERSION="$OPTARG" ;;
      f) SKIP_PROMPT=1 ;;
      h) DISPLAY_HELP=1 ;;
      u) UNINSTALL=1 ;;
    esac
done

if [ $DISPLAY_HELP = 1 ]; then
    echo "Command options:"
    echo ""
    echo "-h Print help."
    echo "-v Version of Circom to be installed."
    echo "-f Skip all prompts."
    echo "-u Uninstall Circom."
    exit 0
fi

# If compiler version isn't explicitly specified, try to look up the latest stable rease on the web.
if [ -z $CIRCOM_VERSION ]; then
    res=$(curl -s https://api.github.com/repos/iden3/circom/releases/latest | grep "tag_name" ) 
    CIRCOM_VERSION=$(echo $res | cut -d'=' -f2 | sed -e "s/tag_name//g" -e "s/[\": ,v]//g")
fi
GITHUB_TAG="v$CIRCOM_VERSION"

is_user_root () { [ "$(id -u)" -eq 0 ]; }

# Detect platform.
UNAME=$(uname)
if [ "$UNAME" = "Linux" -o "$UNAME" = "FreeBSD" ]; then
    URL_POSTFIX="circom-linux-amd64"
elif [ "$UNAME" = "Darwin" ]; then
    URL_POSTFIX="circom-macos-amd64"
else
    URL_POSTFIX="circom-windows-amd64.exe"
    BIN_NAME="circom.exe"
fi

# URL to download from.
DL_URL="https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/${GITHUB_TAG}/${URL_POSTFIX}"
if [ $(curl -o /dev/null -s -w "%{http_code}\n" $DL_URL) = "404" ]; then
    echo  "Version not found: $GITHUB_TAG"
    exit 1
fi


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
        echo "You are about to uninstall Circom which is currently installed at: $INSTALL_DIR/$BIN_NAME"
        echo
        if [ $SKIP_PROMPT = 0 ]; then
            read -p "Proceed? [y/n] " continue < /dev/tty || exit 2
            if [ ! $continue = "y" -a ! $continue = "Y" ]; then
                exit 3
            fi
        fi
        rm $INSTALL_DIR/$BIN_NAME
        echo "Circom was successfully uninstalled."
        exit 0
    else
        echo "No installation found."
        exit 4
    fi
fi

# Installation procedure
echo "You are about to download and install Circom $GITHUB_TAG for $UNAME."
echo
echo "The binary will be installed to $INSTALL_DIR/$BIN_NAME. Make sure, that the containing directory is in your PATH."
if [ -f "$INSTALL_DIR/$BIN_NAME" ]; then
    echo "An existing Circom binary already exists in $INSTALL_DIR/$BIN_NAME. It will be overwritten."
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

# Download and install Circom.
curl -L -J $DL_URL -o $INSTALL_DIR/$BIN_NAME || exit 7
cd $INSTALL_DIR
chmod +x $INSTALL_DIR/$BIN_NAME || exit 10


echo
echo "Circom ${GITHUB_TAG} was successfully installed."
