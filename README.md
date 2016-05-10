[![npm version](https://badge.fury.io/js/urllib-promise.svg)](https://badge.fury.io/js/urllib-promise)
[![Build Status](https://travis-ci.org/danlanxiaohei/urllib-promise.svg?branch=master)](https://travis-ci.org/danlanxiaohei/urllib-promise)
# urllib-promise
目标：封装公司现有请求：

请求返回200：resolve，附带经过JSON.parse()后的数据。

其他情况一律：reject，并附带JSON.parse()后的数据(如果有的话)和请求的 statusCode。

## Install
```bash
$ npm install baeRequest --save
```
## Usage
```js

'use strict';

var koa = require('koa');
var app = koa();
var request = require('baeRequest');

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
