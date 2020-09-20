'use strict';
const http = require('http');

const options = {
  host: 'localhost',
  path: '/convert.js',
  port: '3000',
  method: 'POST'
};

const req = http.request(options, (res)=>{
  console.log(res);
})

req.write('Hello, world');
req.end();