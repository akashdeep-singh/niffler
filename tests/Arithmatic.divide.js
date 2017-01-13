const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Arithmetic.divide', function (t) {
  t.plan(22);

  //13 Numbers with Numbers
  t.equal(Niffler.Arithmetic.divide(1,1), 1 / 1);
  t.equal(Number.isNaN(Niffler.Arithmetic.divide(0,0)), true);
  t.equal(Niffler.Arithmetic.divide(3.14, 3.14), 3.14 / 3.14);
  t.equal(Niffler.Arithmetic.divide(62.777777, 11.77777), 62.777777 / 11.77777);
  t.equal(Niffler.Arithmetic.divide(33.33333, 99.99999), 33.33333 / 99.99999);
  t.equal(Niffler.Arithmetic.divide(-8, 56), -8 / 56);
  t.equal(Niffler.Arithmetic.divide(678, 0), 678 / 0);
  t.equal(Niffler.Arithmetic.divide(0, -67), 0 / -67);
  t.equal(Niffler.Arithmetic.divide(Number.MAX_VALUE, Number.MAX_VALUE), Number.MAX_VALUE / Number.MAX_VALUE);
  t.equal(Niffler.Arithmetic.divide(Number.MIN_VALUE, Number.MIN_VALUE), Number.MIN_VALUE / Number.MIN_VALUE);
  t.equal(Niffler.Arithmetic.divide(Number.MAX_VALUE, Number.MIN_VALUE), Number.MAX_VALUE / Number.MIN_VALUE);
  t.equal(Niffler.Arithmetic.divide(Number.MIN_VALUE, Number.MAX_VALUE), Number.MIN_VALUE / Number.MAX_VALUE);
  t.equal(Niffler.Arithmetic.divide(999, -1024), 999 / -1024);

  //4 Numbers with null
  t.equal(Niffler.Arithmetic.divide(null, 456), null / 456);
  t.equal(Niffler.Arithmetic.divide(789, null), 789 / null);
  t.equal(Niffler.Arithmetic.divide(null, -123.45), null / -123.45);
  t.equal(Number.isNaN(Niffler.Arithmetic.divide(0, null)), true);

  //4 Numbers with undefined
  t.equal(Number.isNaN(Niffler.Arithmetic.divide(undefined, 456)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.divide(789, undefined)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.divide(undefined, -123.45)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.divide(0, undefined)), true);

  //1 Timestamp with Timestamp
  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Arithmetic.divide(start, end), start / end);
});
