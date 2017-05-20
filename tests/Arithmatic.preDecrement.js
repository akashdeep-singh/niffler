const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Arithmetic.preDecrement', function (t) {
  t.plan(12);

  //9 Numbers with Numbers
  t.equal(Niffler.Arithmetic.preDecrement(1), 1 - 1);
  t.equal(Niffler.Arithmetic.preDecrement(0), 0 - 1);
  t.equal(Niffler.Arithmetic.preDecrement(3.14), 3.14 - 1);
  t.equal(Niffler.Arithmetic.preDecrement(62.777777), 62.777777 - 1);
  t.equal(Niffler.Arithmetic.preDecrement(33.33333), 33.33333 - 1);
  t.equal(Niffler.Arithmetic.preDecrement(-8), -8 - 1);
  t.equal(Niffler.Arithmetic.preDecrement(Number.MAX_VALUE), Number.MAX_VALUE - 1);
  t.equal(Niffler.Arithmetic.preDecrement(Number.MIN_VALUE), Number.MIN_VALUE - 1);
  t.equal(Niffler.Arithmetic.preDecrement(999), 999 - 1);

  //1 Numbers with null
  t.equal(Niffler.Arithmetic.preDecrement(null), null - 1);

  //1 Numbers with undefined
  t.equal(Number.isNaN(Niffler.Arithmetic.preDecrement(undefined)), true);

  //1 Timestamp with Timestamp
  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Arithmetic.preDecrement(start), start - 1);
});
