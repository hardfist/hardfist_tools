#!/usr/bin/env node
import prog from 'commander';
import fs from 'fs-extra';

import { resolveApp } from './utils';
const pkg = require('../package.json');

const appPackageJson = fs.readJSONSync(resolveApp('package.json'));

prog
  .version(`@hardfist/hardfist-cli ${pkg.version}`)
  .usage('<command> [options]');

prog
  .command('build')
  .description('Build your project once and exit')
  .usage('aa')
  .allowUnknownOption(true)
  .option('-i, --entry <entry>', 'Entry module(s)')
  .option('--target <target>', 'Specify your target environment', 'web')
  .option('--format <format>', 'Specify module formats', 'cjs,esm')
  .option('--name', 'Specify name exposed in UMD builds')
  .option('--tsconfig', 'Specify custom tsconfig path', false)
  .action((cmd: prog.Command) => {
    const opts = cmd.opts();
    console.log('opts:', opts);
  });
async function getInputs(entries: string | string[], source?: string) {}
async function normalizePath(opts: Record<string, string>) {
  return {
    ...opts,
    name: opts.name || appPackageJson.name,
    input: await getInputs(opts.entry, appPackageJson.source),
    format: opts.format.split(',')
  };
}

prog.parse(process.argv);
if (!process.argv.slice(2).length) {
  prog.outputHelp();
}
