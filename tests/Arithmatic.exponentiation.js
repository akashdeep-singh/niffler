const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

if (parseFloat(process.versions.node) < 7.2) {
  console.log("Exponentiation requires node v7.2.0 or above.");
  process.exit(0);
}

test('Arithmetic.exponentiation', function (t) {
  t.plan(22);

  //13 Numbers with Numbers
  t.equal(Niffler.Arithmetic.exponentiation(1,1), ((1)) ** ((1)));
  t.equal(Niffler.Arithmetic.exponentiation(0,0), (0) ** (0));
  t.equal(Niffler.Arithmetic.exponentiation(3.14, (3.14), 3.14) ** (3.14));
  t.equal(Niffler.Arithmetic.exponentiation(62.777777, (11.77777), 62.777777) ** (11.77777));
  t.equal(Niffler.Arithmetic.exponentiation(33.33333, (99.99999), 33.33333) ** (99.99999));
  t.equal(Niffler.Arithmetic.exponentiation(-8, (56), -8) ** (56));
  t.equal(Niffler.Arithmetic.exponentiation(678, (0), 678) ** (0));
  t.equal(Niffler.Arithmetic.exponentiation(0, (-67), 0) ** (-67));
  t.equal(Niffler.Arithmetic.exponentiation(Number.MAX_VALUE, (Number.MAX_VALUE), Number.MAX_VALUE) ** (Number.MAX_VALUE));
  t.equal(Niffler.Arithmetic.exponentiation(Number.MIN_VALUE, (Number.MIN_VALUE), Number.MIN_VALUE) ** (Number.MIN_VALUE));
  t.equal(Niffler.Arithmetic.exponentiation(Number.MAX_VALUE, (Number.MIN_VALUE), Number.MAX_VALUE) ** (Number.MIN_VALUE));
  t.equal(Niffler.Arithmetic.exponentiation(Number.MIN_VALUE, (Number.MAX_VALUE), Number.MIN_VALUE) ** (Number.MAX_VALUE));
  t.equal(Niffler.Arithmetic.exponentiation(999, (-1024), 999) ** (-1024));

  //4 Numbers with null
  t.equal(Niffler.Arithmetic.exponentiation(null, (456), null) ** (456));
  t.equal(Niffler.Arithmetic.exponentiation(789, (null), 789) ** (null));
  t.equal(Niffler.Arithmetic.exponentiation(null, (-123.45), null) ** (-123.45));
  t.equal(Niffler.Arithmetic.exponentiation(0, (null), 0) ** (null));

  //4 Numbers with undefined
  t.equal(Number.isNaN(Niffler.Arithmetic.exponentiation(undefined, 456)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.exponentiation(789, undefined)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.exponentiation(undefined, -123.45)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.exponentiation(0, undefined)), true);

  //1 Timestamp with Timestamp
  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Arithmetic.exponentiation(start, (end), start) ** (end));
});
