<!-- [![npm version](https://badge.fury.io/js/urllib-promise.svg)](https://badge.fury.io/js/promise-success)
[![Build Status](https://travis-ci.org/danlanxiaohei/urllib-promise.svg?branch=master)](https://travis-ci.org/danlanxiaohei/promise-success) -->
# promise-success
目标：封装公司现有请求：

请求返回200：resolve，附带经过JSON.parse()后的数据。

其他情况一律：reject，并附带JSON.parse()后的数据(如果有的话)和请求的 statusCode。

## Install
```bash
$ npm install promise-success --save
```
## Usage
```js

'use strict';

var koa = require('koa');
var app = koa();
var request = require('promise-success');

app.use(function *(){
  try {
    var result = yield request('https://www.baidu.com');
    this.body = result;
  } catch (e) {
    this.body = e;
  }
});

app.listen(8000);


```
