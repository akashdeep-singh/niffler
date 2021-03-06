const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Arithmetic.multiply', function (t) {
  t.plan(22);

  //13 Numbers with Numbers
  t.equal(Niffler.Arithmetic.multiply(1,1), 1 * 1);
  t.equal(Niffler.Arithmetic.multiply(0,0), 0 * 0);
  t.equal(Niffler.Arithmetic.multiply(3.14, 3.14), 3.14 * 3.14);
  t.equal(Niffler.Arithmetic.multiply(62.777777, 11.77777), 62.777777 * 11.77777);
  t.equal(Niffler.Arithmetic.multiply(33.33333, 99.99999), 33.33333 * 99.99999);
  t.equal(Niffler.Arithmetic.multiply(-8, 56), -8 * 56);
  t.equal(Niffler.Arithmetic.multiply(678, 0), 678 * 0);
  t.equal(Niffler.Arithmetic.multiply(0, -67), 0 * -67);
  t.equal(Niffler.Arithmetic.multiply(Number.MAX_VALUE, Number.MAX_VALUE), Number.MAX_VALUE * Number.MAX_VALUE);
  t.equal(Niffler.Arithmetic.multiply(Number.MIN_VALUE, Number.MIN_VALUE), Number.MIN_VALUE * Number.MIN_VALUE);
  t.equal(Niffler.Arithmetic.multiply(Number.MAX_VALUE, Number.MIN_VALUE), Number.MAX_VALUE * Number.MIN_VALUE);
  t.equal(Niffler.Arithmetic.multiply(Number.MIN_VALUE, Number.MAX_VALUE), Number.MIN_VALUE * Number.MAX_VALUE);
  t.equal(Niffler.Arithmetic.multiply(999, -1024), 999 * -1024);

  //4 Numbers with null
  t.equal(Niffler.Arithmetic.multiply(null, 456), null * 456);
  t.equal(Niffler.Arithmetic.multiply(789, null), 789 * null);
  t.equal(Niffler.Arithmetic.multiply(null, -123.45), null * -123.45);
  t.equal(Niffler.Arithmetic.multiply(0, null), 0 * null);

  //4 Numbers with undefined
  t.equal(Number.isNaN(Niffler.Arithmetic.multiply(undefined, 456)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.multiply(789, undefined)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.multiply(undefined, -123.45)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.multiply(0, undefined)), true);

  //1 Timestamp with Timestamp
  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Arithmetic.multiply(start, end), start * end);
});
