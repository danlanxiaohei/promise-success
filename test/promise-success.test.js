const request = require('../lib/promise-success');
import test from 'ava';

test('reqeust', async t => {
  try {
    const result = await request('https://github.com');
    console.log(result)
  } catch (e) {
    console.log(e);
  }
});
