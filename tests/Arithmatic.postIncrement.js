const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Arithmetic.postIncrement', function (t) {
  t.plan(12);

  //9 Numbers with Numbers
  t.equal(Niffler.Arithmetic.postIncrement(1), 1);
  t.equal(Niffler.Arithmetic.postIncrement(0), 0);
  t.equal(Niffler.Arithmetic.postIncrement(3.14), 3.14);
  t.equal(Niffler.Arithmetic.postIncrement(62.777777), 62.777777);
  t.equal(Niffler.Arithmetic.postIncrement(33.33333), 33.33333);
  t.equal(Niffler.Arithmetic.postIncrement(-8), -8);
  t.equal(Niffler.Arithmetic.postIncrement(Number.MAX_VALUE), Number.MAX_VALUE);
  t.equal(Niffler.Arithmetic.postIncrement(Number.MIN_VALUE), Number.MIN_VALUE);
  t.equal(Niffler.Arithmetic.postIncrement(999), 999);

  //1 Numbers with null
  t.equal(Niffler.Arithmetic.postIncrement(null), 0);

  //1 Numbers with undefined
  t.equal(Number.isNaN(Niffler.Arithmetic.postIncrement(undefined)), true);

  //1 Timestamp with Timestamp
  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Arithmetic.postIncrement(start), start);
});
