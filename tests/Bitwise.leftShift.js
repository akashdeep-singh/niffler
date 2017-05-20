const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Bitwise.leftShift', function (t) {
  t.plan(13);

  t.equal(Niffler.Bitwise.leftShift(5, 1), 5 << 1);
  t.equal(Niffler.Bitwise.leftShift(0, 0), 0 << 0);
  t.equal(Niffler.Bitwise.leftShift(12, 3), 12 << 3);
  t.equal(Niffler.Bitwise.leftShift(-13, 4), -13 << 4);
  t.equal(Niffler.Bitwise.leftShift(99, 1), 99 << 1);
  t.equal(Niffler.Bitwise.leftShift(99, 2), 99 << 2);
  t.equal(Niffler.Bitwise.leftShift(99, 3), 99 << 3);
  t.equal(Niffler.Bitwise.leftShift(99, 4), 99 << 4);
  t.equal(Niffler.Bitwise.leftShift(99, 5), 99 << 5);
  t.equal(Niffler.Bitwise.leftShift(99, 6), 99 << 6);
  t.equal(Niffler.Bitwise.leftShift(99, 7), 99 << 7);
  t.equal(Niffler.Bitwise.leftShift(99, 8), 99 << 8);
  t.equal(Niffler.Bitwise.leftShift(99, 9), 99 << 9);
});
