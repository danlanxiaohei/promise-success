[![npm version](https://badge.fury.io/js/urllib-promise.svg)](https://badge.fury.io/js/urllib-promise)
[![Build Status](https://travis-ci.org/danlanxiaohei/urllib-promise.svg?branch=master)](https://travis-ci.org/danlanxiaohei/urllib-promise)
# urllib-promise
this is a urllib encapsulation using promise
## Install
```bash
$ npm install urllib-promise --save
```
## Usage
```js

'use strict';

var koa = require('koa');
var app = koa();
var request = require('urllib-promise');

app.use(function *(){
  try {
    var result = yield request('https://www.baidu.com');
    this.body = result.res.statusCode;
  } catch (e) {
    this.body = e;
  }
});

app.listen(8000);


```
