---
layout: post
title: "MacOS Big Sur - Apple M1 - Development Setup"
categories: [notes]
tags: [development, configuration]
---

# Dev machine configuration

Dear reader, this is just a bunch of notes to configure my dev machinem, it's an snapshot to configure my new macbook pro m1. enjoy!

Software:

- [Homebrew](#homegbrew)
- [Git](#git)
- [SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
- GPG
    - [Tools](https://gist.github.com/troyfontaine/18c9146295168ee9ca2b30c00bd1b41e)
    - [Key management](https://insight.o-o.studio/article/setting-up-gpg.html)
- VSCode (nothing to say here, just install)
- Nodejs
    - [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)

## Homebrew

Brew has support now for M1 chip, although, it introduce some changes on its structure.

`HOMEBREW_PREFIX: /opt/homebrew`

Over that new path Homebrew will install all apple silicon compatible packages, saying that, it is needed to add the following line to your `.zshrc`

`export PATH=/opt/homebrew/bin:$PATH`

## Git

`brew install git`

Use your own version rather than the one that comes with xcode tools, it's always outdated and releases are less frequet.