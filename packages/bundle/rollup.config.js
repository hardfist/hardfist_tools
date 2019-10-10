const fs = require('fs');
const path = require('path');
const json = require('rollup-plugin-json');
const { terser } = require('rollup-plugin-terser');
if (!process.env.TARGET) {
  throw new Error('TARGET package must be specified via --environment flag.');
}

const packagesDir = path.resolve(process.cwd(), 'packages');
const packageDir = path.resolve(packagesDir, process.env.TARGET);
const name = path.basename(packageDir);
const resolve = p => path.resolve(packageDir, p);
const pkg = require(resolve(`package.json`));
const packageOptions = pkg.buildOptions || {};
const defaultFormats = ['esm', 'cjs'];
const inlineFormats = process.env.FORMATS && process.env.FORMATS.split(',');
const packageFormats =
  inlineFormats || packageOptions.formats || defaultFormats;

const configs = {
  esm: {
    file: resolve(`dist/${name}.esm.js`),
    format: 'es'
  },
  cjs: {
    file: resolve(`dist/${name}.cjs.js`),
    format: `cjs`
  },
  umd: {
    file: resolve(`dist/${name}.umd.js`),
    format: 'umd'
  }
};

const packageConfigs = packageFormats.map(format =>
  createConfig(configs[format])
);
packageFormats.forEach(format => {
  if (format === 'umd') {
    packageConfigs.push(createMinifiedConfig(format));
  }
});

function createConfig(output, plugins = []) {
  return {
    input: resolve(`src/index.js`),
    output,
    plugins: [
      json({
        namedExports: false
      }),

      ...plugins
    ]
  };
}
function createMinifiedConfig(format) {
  return createConfig(
    {
      file: resolve(`dist/${name}.${format}.min.js`),
      format: configs[format].format
    },
    [terser()]
  );
}
module.exports = packageConfigs;
