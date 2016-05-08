const request = require('../lib/urllib-promise');
import test from 'ava';

test('reqeust', async t => {
  try {
    const result = await request('https://github.com');
    t.is(result.res.statusCode, 200);
  } catch (e) {
    console.log(e);
  }
});
