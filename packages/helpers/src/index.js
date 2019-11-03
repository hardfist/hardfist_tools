import answer from 'the-answer';
import * as _ from 'lodash';
// import map from 'lodash-es/map';
export function myanswer() {
  console.log('the answer is ' + answer + _.find('hello world', 'world'));
}
