'use strict';

console.log('test node module');

const local1 = 'index local1';
let local2 = 'index local2';

const mlib = require('./module1.js');
mlib.showLocal1();
mlib.showLocal2();

const mmlib = require('moment');
console.log(mmlib().format('MMMM Do YYYY, h:mm:ss a'));