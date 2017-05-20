const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Bitwise.xor', function (t) {
  t.plan(22);

  t.equal(Niffler.Bitwise.xor(1, 1), 1 ^ 1);
  t.equal(Niffler.Bitwise.xor(0, 0), 0 ^ 0);
  t.equal(Niffler.Bitwise.xor(3.14, 3.14), 3.14 ^ 3.14);
  t.equal(Niffler.Bitwise.xor(62.777777, 11.77777), 62.777777 ^ 11.77777);
  t.equal(Niffler.Bitwise.xor(33.33333, 99.99999), 33.33333 ^ 99.99999);
  t.equal(Niffler.Bitwise.xor(-8, 56), -8 ^ 56);
  t.equal(Niffler.Bitwise.xor(Number.MAX_VALUE, Number.MAX_VALUE), Number.MAX_VALUE ^ Number.MAX_VALUE);
  t.equal(Niffler.Bitwise.xor(Number.MIN_VALUE, Number.MIN_VALUE), Number.MIN_VALUE ^ Number.MIN_VALUE);
  t.equal(Niffler.Bitwise.xor(Number.MAX_VALUE, Number.MIN_VALUE), Number.MAX_VALUE ^ Number.MIN_VALUE);
  t.equal(Niffler.Bitwise.xor(Number.MIN_VALUE, Number.MAX_VALUE), Number.MIN_VALUE ^ Number.MAX_VALUE);
  t.equal(Niffler.Bitwise.xor(999, -1024), 999 ^ -1024);

  t.equal(Niffler.Bitwise.xor(null, 456), null ^ 456);
  t.equal(Niffler.Bitwise.xor(789, null), 789 ^ null);
  t.equal(Niffler.Bitwise.xor(null, -123.45), null ^ -123.45);
  t.equal(Niffler.Bitwise.xor(0, null), 0 ^ null);

  t.equal(Niffler.Bitwise.xor(undefined, 456), undefined ^ 456);
  t.equal(Niffler.Bitwise.xor(789, undefined), 789 ^ undefined);
  t.equal(Niffler.Bitwise.xor(undefined, -123.45), undefined ^ -123.45);
  t.equal(Niffler.Bitwise.xor(0, undefined), 0 ^ undefined);

  t.equal(Niffler.Bitwise.xor(null, null), null ^ null);
  t.equal(Niffler.Bitwise.xor(undefined, undefined), undefined ^ undefined);

  //1 Timestamp with Timestamp
  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Bitwise.xor(start, end), start ^ end);
});
