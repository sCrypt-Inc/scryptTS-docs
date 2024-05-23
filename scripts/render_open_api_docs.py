import os
import re
from typing import Pattern

PATTERNS = [
    # `Schema` TabItem
    re.compile(r'<TabItem label=\{"Schema"}.*?</TabItem>', re.DOTALL),
    # `Example (from schema)` TabItem
    re.compile(r'<TabItem label=\{"Example \(from schema\)"}.*?</TabItem>', re.DOTALL),
    # empty SchemaTabs
    re.compile(r'<SchemaTabs\s*className=\{"openapi-tabs__schema"}>\s*</SchemaTabs>', re.DOTALL),
    # `Request` title
    re.compile(r'## Request', re.DOTALL),
    # `Request` params
    re.compile(r'<details style={{\"marginBottom\":\"1rem\"}}.*?</details>', re.DOTALL),
]


def remove_tag(content: str, pattern: Pattern) -> str:
    return re.sub(pattern, '', content)


def traverse_and_modify_files(folder: str):
    print('Rendering OpenAPI docs...')
    # traverse all files in the folder
    for root, dirs, files in os.walk(folder):
        for file in files:
            file_path = os.path.join(root, file)
            # read file content
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            # remove specific tags
            for pattern in PATTERNS:
                content = remove_tag(content, pattern)
            # write the modified content back to the file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
    print('OpenAPI docs rendered successfully!')


if __name__ == "__main__":
    scripts_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(scripts_dir)
    traverse_and_modify_files(f'{project_dir}/open-api/btc')
