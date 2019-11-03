import answer from 'the-answer';
import find from 'lodash-es/find';
import axios from 'axios';
import { version } from '../package.json';
import { connect } from 'react-redux';
export async function myanswer(str: string) {
  const result = await axios.get('http://www.baidu.com');
  console.log('the answer is ' + answer + find('hello world', 'world'));
  console.log('version:', version);
  console.log('connect:', connect, result);
}

myanswer('ss');
