const minimist = require('minimist');
const fs = require('fs-extra');
const zlib = require('zlib');
const chalk = require('chalk');
const path = require('path');
const execa = require('execa');
const { gzipSync } = require('zlib');
const { compress } = require('brotli');
const args = require('minimist')(process.argv.slice(2));

const targets = args._;
const formats = args.formats || args.f;
const devOnly = args.devOnly || args.d;
const prodOnly = !devOnly && (args.prodOnly || args.p);
const buildAllMatching = args.all || args.a;
const commit = execa.sync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7);

(async () => {
  if (!targets.length) {
    await buildAll();
  }
})();

async function buildAll(targets) {
  for (const target of targets) {
    await build(target);
  }
}
async function build(target) {
  const pkgDir = path.resolve(`packages/${target}`);
  const pkg = require(`${pkgDir}/package.json`);
  await fs.remove(`${pkgDir}/dist`);
  const env =
    (pkg.buildOptions && pkg.buildOptions.env) ||
    (devOnly ? 'development' : 'production');
  await execa(
    'rollup',
    [
      '-c',
      '--environment',
      [
        `COMMIT:${commit}`,
        `NODE_ENV:${env}`,
        `TARGET:${target}`,
        formats ? `FORMATS:${formats}` : ``,
        args.types ? `TYPES:true` : ``,
        prodOnly ? `PROD_ONLY:true` : ``
      ]
        .filter(_ => _)
        .join(',')
    ],
    { stdio: 'inherit' }
  );
}
