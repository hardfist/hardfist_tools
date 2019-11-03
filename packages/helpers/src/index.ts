import answer from 'the-answer';
import find from 'lodash-es/find';
import { version } from '../package.json';
// import { connect } from 'react-redux';
export async function myanswer(str: string) {
  console.log('the answer is ' + answer + find('hello world', 'world'));
  console.log('version:', version);
  // console.log('connect:', connect);
}
