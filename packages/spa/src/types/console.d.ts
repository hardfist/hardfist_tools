declare module 'console' {
  export = typeof import('console'); // 修复console自动导入的bug见 https://github.com/microsoft/TypeScript/issues/30471
}
