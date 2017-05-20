const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Comparison.isLessThanOrEqual', function (t) {
  t.plan(27);

  t.equal(Niffler.Comparison.isLessThanOrEqual(1,1), 1 <= 1);
  t.equal(Niffler.Comparison.isLessThanOrEqual(0,0), 0 <= 0);
  t.equal(Niffler.Comparison.isLessThanOrEqual(3.14, 3.14), 3.14 <= 3.14);
  t.equal(Niffler.Comparison.isLessThanOrEqual(62.777777, 11.77777), 62.777777 <= 11.77777);
  t.equal(Niffler.Comparison.isLessThanOrEqual(33.33333, 99.99999), 33.33333 <= 99.99999);
  t.equal(Niffler.Comparison.isLessThanOrEqual(-8, 56), -8 <= 56);
  t.equal(Niffler.Comparison.isLessThanOrEqual(Number.MAX_VALUE, Number.MAX_VALUE), Number.MAX_VALUE <= Number.MAX_VALUE);
  t.equal(Niffler.Comparison.isLessThanOrEqual(Number.MIN_VALUE, Number.MIN_VALUE), Number.MIN_VALUE <= Number.MIN_VALUE);
  t.equal(Niffler.Comparison.isLessThanOrEqual(Number.MAX_VALUE, Number.MIN_VALUE), Number.MAX_VALUE <= Number.MIN_VALUE);
  t.equal(Niffler.Comparison.isLessThanOrEqual(Number.MIN_VALUE, Number.MAX_VALUE), Number.MIN_VALUE <= Number.MAX_VALUE);
  t.equal(Niffler.Comparison.isLessThanOrEqual(999, -1024), 999 <= -1024);

  t.equal(Niffler.Comparison.isLessThanOrEqual(null, 456), null <= 456);
  t.equal(Niffler.Comparison.isLessThanOrEqual(789, null), 789 <= null);
  t.equal(Niffler.Comparison.isLessThanOrEqual(null, -123.45), null <= -123.45);
  t.equal(Niffler.Comparison.isLessThanOrEqual(0, null), 0 <= null);

  t.equal(Niffler.Comparison.isLessThanOrEqual(undefined, 456), undefined <= 456);
  t.equal(Niffler.Comparison.isLessThanOrEqual(789, undefined), 789 <= undefined);
  t.equal(Niffler.Comparison.isLessThanOrEqual(undefined, -123.45), undefined <= -123.45);
  t.equal(Niffler.Comparison.isLessThanOrEqual(0, undefined), 0 <= undefined);

  t.equal(Niffler.Comparison.isLessThanOrEqual('9', 8), '9' <= 8);
  t.equal(Niffler.Comparison.isLessThanOrEqual('8', 9), '8' <= 9);
  t.equal(Niffler.Comparison.isLessThanOrEqual(8, '9'), 8 <= '9');
  t.equal(Niffler.Comparison.isLessThanOrEqual(9, '8'), 9 <= '8');

  t.equal(Niffler.Comparison.isLessThanOrEqual(0, '0'), 0 <= '0');
  t.equal(Niffler.Comparison.isLessThanOrEqual(9, '9'), 9 <= '9');
  t.equal(Niffler.Comparison.isLessThanOrEqual('90', '800'), '90' <= '800');

  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Comparison.isLessThanOrEqual(start, end), start <= end);
});
