const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Bitwise.not', function (t) {
  t.plan(12);

  t.equal(Niffler.Bitwise.not(1), ~(1));
  t.equal(Niffler.Bitwise.not(0), ~(0));
  t.equal(Niffler.Bitwise.not(3.14), ~(3.14));
  t.equal(Niffler.Bitwise.not(62.777777), ~(62.777777));
  t.equal(Niffler.Bitwise.not(33.33333), ~(33.33333));
  t.equal(Niffler.Bitwise.not(-8), ~(-8));
  t.equal(Niffler.Bitwise.not(Number.MAX_VALUE), ~(Number.MAX_VALUE));
  t.equal(Niffler.Bitwise.not(Number.MIN_VALUE), ~(Number.MIN_VALUE));
  t.equal(Niffler.Bitwise.not(999), ~(999));

  t.equal(Niffler.Bitwise.not(null), ~(null));
  t.equal(Niffler.Bitwise.not(undefined), ~(undefined));

  //1 Timestamp with Timestamp
  let start = Date.now();
  t.equal(Niffler.Bitwise.not(start), ~(start));
});
