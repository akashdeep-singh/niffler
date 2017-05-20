const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Arithmetic.negate', function (t) {
  t.plan(12);

  //9 Numbers with Numbers
  t.equal(Niffler.Arithmetic.negate(1), -1);
  t.equal(Niffler.Arithmetic.negate(0), -0);
  t.equal(Niffler.Arithmetic.negate(3.14), -3.14);
  t.equal(Niffler.Arithmetic.negate(62.777777), -62.777777);
  t.equal(Niffler.Arithmetic.negate(33.33333), -33.33333);
  t.equal(Niffler.Arithmetic.negate(-8), -(-8));
  t.equal(Niffler.Arithmetic.negate(Number.MAX_VALUE), -Number.MAX_VALUE);
  t.equal(Niffler.Arithmetic.negate(Number.MIN_VALUE), -Number.MIN_VALUE);
  t.equal(Niffler.Arithmetic.negate(999), -999);

  //1 Numbers with null
  t.equal(Niffler.Arithmetic.negate(null), -null);

  //1 Numbers with undefined
  t.equal(Number.isNaN(Niffler.Arithmetic.negate(undefined)), true);

  //1 Timestamp with Timestamp
  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Arithmetic.negate(start), -start);
});
