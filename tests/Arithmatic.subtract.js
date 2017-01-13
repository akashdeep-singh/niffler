const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Arithmetic.subtract', function (t) {
  t.plan(20);

  //11 Numbers with Numbers
  t.equal(Niffler.Arithmetic.subtract(1,1), 1 - 1);
  t.equal(Niffler.Arithmetic.subtract(0,0), 0 - 0);
  t.equal(Niffler.Arithmetic.subtract(3.14, 3.14), 3.14 - 3.14);
  t.equal(Niffler.Arithmetic.subtract(62.777777, 11.77777), 62.777777 - 11.77777);
  t.equal(Niffler.Arithmetic.subtract(33.33333, 99.99999), 33.33333 - 99.99999);
  t.equal(Niffler.Arithmetic.subtract(-8, 56), -8 - 56);
  t.equal(Niffler.Arithmetic.subtract(Number.MAX_VALUE, Number.MAX_VALUE), Number.MAX_VALUE - Number.MAX_VALUE);
  t.equal(Niffler.Arithmetic.subtract(Number.MIN_VALUE, Number.MIN_VALUE), Number.MIN_VALUE - Number.MIN_VALUE);
  t.equal(Niffler.Arithmetic.subtract(Number.MAX_VALUE, Number.MIN_VALUE), Number.MAX_VALUE - Number.MIN_VALUE);
  t.equal(Niffler.Arithmetic.subtract(Number.MIN_VALUE, Number.MAX_VALUE), Number.MIN_VALUE - Number.MAX_VALUE);
  t.equal(Niffler.Arithmetic.subtract(999, -1024), 999 - -1024);

  //4 Numbers with null
  t.equal(Niffler.Arithmetic.subtract(null, 456), null - 456);
  t.equal(Niffler.Arithmetic.subtract(789, null), 789 - null);
  t.equal(Niffler.Arithmetic.subtract(null, -123.45), null - -123.45);
  t.equal(Niffler.Arithmetic.subtract(0, null), 0 - null);

  //4 Numbers with undefined
  t.equal(Number.isNaN(Niffler.Arithmetic.subtract(undefined, 456)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.subtract(789, undefined)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.subtract(undefined, -123.45)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.subtract(0, undefined)), true);

  //1 Timestamp with Timestamp
  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Arithmetic.subtract(start, end), start - end);
});
