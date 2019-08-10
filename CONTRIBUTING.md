# 如何贡献代码
本项目为monorepo项目，使用lerna + yarn workspace来管理项目。本文档介绍一下大致的开发和部署工作流

## 环境准备
事先需安装好`node`,`yarn`，默认的编辑器为vscode

```shell
$ yarn install # 安装依赖以及将本地依赖的package进行link
```

## 清理环境
如果因为失误操作造成当前环境已经乱掉了，可以通过如下方式清理环境
```shell
$ yarn clean # 清理构建产物
$ lerna clean # 清理root以及package下的node_modules
```
## 安装依赖
```shell
$ yarn add -W -D  typescript # 给root 添加依赖
$ lerna add @hardfist/helpers --scope=@hardfist/spa # 把@hardifst/helpers作为 @hardfist/spa的依赖
$ lerna add lodash # 为每个package添加lodash依赖,不包含root
```
## 删除依赖
lerna 暂时没有提供remove支持，可以通过exec来实现
```shell
$ yarn remove -W typescript # 删除root的typescript的依赖
$ lerna exec --scope=@hardfist/spa -- yarn remove lodash # 删除@hardfist/spa 里的lodash依赖
$ lerna exec -- yarn remove lodash # 删除每个package里的lodash依赖
```
## build
```shell
$ yarn build # 编译所有package
$ lerna run  --scope {package_name} build # 单独编译某个package
```

## 测试
```shell
$ yarn test # 测试所有的package
$ lerna run --scope {package_name} build # 单独测试某个package
```
## 发版
为了更好地进行版本控制，我们将版本记录和npm发包拆开来做，先进行版本记录，再进行发包

## version_bump
版本记录主要的有两个作用
* 版本升级（同时控制依赖升级）
* 更新changelog.md
我们还是通过lerna来进行控制
```shell
$ npm run bump # 更新版本以及生成changelog
```

## npm 发包
```shell
$ npm run release # 发布npm run version生成的新版本库

```

