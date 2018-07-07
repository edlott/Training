import * as mlib from './module1.js';
import mmlib from 'moment'

console.log('test node module');

const local1 = 'index local1';
let local2 = 'index local2';

mlib.showLocal1();
mlib.showLocal2();

console.log(mmlib().format('MMMM Do YYYY, h:mm:ss a'));