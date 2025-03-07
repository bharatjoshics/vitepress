#!/usr/bin/env sh

# abort on errors
set -e

# navigate to the docs folder
cd docs

# build the site
npm run docs:build

# navigate into the build output directory
cd .vitepress/dist

# initialize git
git init
git add -A
git commit -m 'deploy'

# push to the gh-pages branch
git push -f git@github.com:your-username/repository-name.git main:gh-pages

cd -