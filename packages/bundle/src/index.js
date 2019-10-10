const execa = require('execa');
const path = require('path');
const minimist = require('minimist');
const rawArgs = process.argv.slice(2);
const args = minimist(rawArgs);
const formats = args.formats || args.f;
const targets = args._;
const commit = execa.sync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7);
const rollupConfig = path.resolve(__dirname, '../rollup.config.js');

async function buildAll(targets) {
  console.log('targ');
  for (const target of targets) {
    await build(target);
  }
}
function serializeEnv(environment) {
  return Object.entries(environment)
    .filter(x => x[1] !== undefined)
    .map(x => x.join(':'))
    .join(',');
}
async function build(target) {
  try {
    execa.sync('rollup', [
      `--config ${rollupConfig}`,
      '--environment',
      serializeEnv({
        COMMIT: commit,
        TARGET: target,
        FORMATS: formats
      })
    ]);
  } catch (err) {
    console.log('err:', err);
  }
}

(async function main() {
  if (targets.length) {
    await buildAll(targets);
  } else {
    throw new Error('no target specified');
  }
})();
