# hardfist_tools

<p >
  <a href="https://circleci.com/gh/hardfist/hardfist_tools/tree/master"><img src="https://img.shields.io/circleci/project/github/hardfist/hardfist_tools/master.svg" alt="Build Status"></a>
 </a>
</p>

## 安装启动

通过[yarn workspace](https://yarnpkg.com/lang/en/docs/workspaces/)管理各个模块

```
$ npm install -g yarn // 安装yarn
$ yarn bootstrap // 安装依赖
$ yarn workspace @hardfist/spa start // 启动子模块
```

## 文档

| 模块                | 版本                                                                                                                      | 文档                                                                                            | 线上地址                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| @hardfist/spa       | [![npm version](https://img.shields.io/npm/v/@hardfist/spa.svg)](https://www.npmjs.com/package/@hardfist/spa)             | [@hardfist/spa 文档](https://github.com/hardfist/hardfist_tools/tree/master/packages/spa)       | https://unpkg.com/@hardfist/spa/build/index.html       |
| @hardfist/realworld | [![npm version](https://img.shields.io/npm/v/@hardfist/realworld.svg)](https://www.npmjs.com/package/@hardfist/realworld) | [@hardfist/spa 文档](https://github.com/hardfist/hardfist_tools/tree/master/packages/realworld) | https://unpkg.com/@hardfist/realworld/build/index.html |
