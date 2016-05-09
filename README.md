# urllib-promise
this is a urllib encapsulation using promise
## Install
```bash
$ npm install urllib-promise --save
```
## Usage
```js
var request = require('urllib-promise');

try {
  var result = yield request('https://www.github.com');
  console.log(result.res.statusCode);
} catch (e) {
  console.log(e);
}

```
