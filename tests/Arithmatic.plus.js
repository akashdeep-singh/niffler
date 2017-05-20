const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Arithmetic.plus', function (t) {
  t.plan(12);

  //9 Numbers with Numbers
  t.equal(Niffler.Arithmetic.plus(1), +1);
  t.equal(Niffler.Arithmetic.plus(0), +0);
  t.equal(Niffler.Arithmetic.plus(3.14), +3.14);
  t.equal(Niffler.Arithmetic.plus(62.777777), +62.777777);
  t.equal(Niffler.Arithmetic.plus(33.33333), +33.33333);
  t.equal(Niffler.Arithmetic.plus(-8), +(-8));
  t.equal(Niffler.Arithmetic.plus(Number.MAX_VALUE), +Number.MAX_VALUE);
  t.equal(Niffler.Arithmetic.plus(Number.MIN_VALUE), +Number.MIN_VALUE);
  t.equal(Niffler.Arithmetic.plus(999), +999);

  //1 Numbers with null
  t.equal(Niffler.Arithmetic.plus(null), +null);

  //1 Numbers with undefined
  t.equal(Number.isNaN(Niffler.Arithmetic.plus(undefined)), true);

  //1 Timestamp with Timestamp
  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Arithmetic.plus(start), +start);
});
