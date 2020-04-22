#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ./dist


# 如果是发布到自定义域名

# 推送到git-pages
git init
git add .
git commit -m '测试远程仓库'
git remote add origin https://github.com/Tyrone-Wu/Owlaser.git
git push -f origin master
git remote add coding https://e.coding.net/tyronewu/OWLASER.git
git push -f coding master
