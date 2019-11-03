import answer from 'the-answer';
import find from 'lodash-es/find';
import { version } from '../package.json';
// import map from 'lodash-es/map';
export function myanswer() {
  console.log('the answer is ' + answer + find('hello world', 'world'));
  console.log('version:', version);
}
