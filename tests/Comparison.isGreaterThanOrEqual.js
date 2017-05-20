const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Comparison.isGreaterThanOrEqual', function (t) {
  t.plan(27);

  t.equal(Niffler.Comparison.isGreaterThanOrEqual(1,1), 1 >= 1);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(0,0), 0 >= 0);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(3.14, 3.14), 3.14 >= 3.14);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(62.777777, 11.77777), 62.777777 >= 11.77777);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(33.33333, 99.99999), 33.33333 >= 99.99999);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(-8, 56), -8 >= 56);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(Number.MAX_VALUE, Number.MAX_VALUE), Number.MAX_VALUE >= Number.MAX_VALUE);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(Number.MIN_VALUE, Number.MIN_VALUE), Number.MIN_VALUE >= Number.MIN_VALUE);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(Number.MAX_VALUE, Number.MIN_VALUE), Number.MAX_VALUE >= Number.MIN_VALUE);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(Number.MIN_VALUE, Number.MAX_VALUE), Number.MIN_VALUE >= Number.MAX_VALUE);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(999, -1024), 999 >= -1024);

  t.equal(Niffler.Comparison.isGreaterThanOrEqual(null, 456), null >= 456);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(789, null), 789 >= null);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(null, -123.45), null >= -123.45);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(0, null), 0 >= null);

  t.equal(Niffler.Comparison.isGreaterThanOrEqual(undefined, 456), undefined >= 456);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(789, undefined), 789 >= undefined);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(undefined, -123.45), undefined >= -123.45);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(0, undefined), 0 >= undefined);

  t.equal(Niffler.Comparison.isGreaterThanOrEqual('9', 8), '9' >= 8);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual('8', 9), '8' >= 9);
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(8, '9'), 8 >= '9');
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(9, '8'), 9 >= '8');

  t.equal(Niffler.Comparison.isGreaterThanOrEqual(0, '0'), 0 >= '0');
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(9, '9'), 9 >= '9');
  t.equal(Niffler.Comparison.isGreaterThanOrEqual('90', '800'), '90' >= '800');

  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Comparison.isGreaterThanOrEqual(start, end), start >= end);
});
