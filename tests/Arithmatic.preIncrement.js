const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Arithmetic.preIncrement', function (t) {
  t.plan(12);

  //9 Numbers with Numbers
  t.equal(Niffler.Arithmetic.preIncrement(1), 1 + 1);
  t.equal(Niffler.Arithmetic.preIncrement(0), 0 + 1);
  t.equal(Niffler.Arithmetic.preIncrement(3.14), 3.14 + 1);
  t.equal(Niffler.Arithmetic.preIncrement(62.777777), 62.777777 + 1);
  t.equal(Niffler.Arithmetic.preIncrement(33.33333), 33.33333 + 1);
  t.equal(Niffler.Arithmetic.preIncrement(-8), -8 + 1);
  t.equal(Niffler.Arithmetic.preIncrement(Number.MAX_VALUE), Number.MAX_VALUE + 1);
  t.equal(Niffler.Arithmetic.preIncrement(Number.MIN_VALUE), Number.MIN_VALUE + 1);
  t.equal(Niffler.Arithmetic.preIncrement(999), 999 + 1);

  //1 Numbers with null
  t.equal(Niffler.Arithmetic.preIncrement(null), null + 1);

  //1 Numbers with undefined
  t.equal(Number.isNaN(Niffler.Arithmetic.preIncrement(undefined)), true);

  //1 Timestamp with Timestamp
  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Arithmetic.preIncrement(start), start + 1);
});
