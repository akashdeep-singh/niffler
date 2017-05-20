const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Comparison.isIdentical', function (t) {
  t.plan(21);

  t.equal(Niffler.Comparison.isIdentical(1, 1), 1 === 1);
  t.equal(Niffler.Comparison.isIdentical(1, '1'), 1 === '1');
  t.equal(Niffler.Comparison.isIdentical(0, false), 0 === false);
  t.equal(Niffler.Comparison.isIdentical(0, null), 0 === null);

  let object1 = { 'value': 'key' }, object2 = { 'value': 'key' };
  t.equal(Niffler.Comparison.isIdentical(object1, object2), object1 === object2);
  t.equal(Niffler.Comparison.isIdentical(0, undefined), 0 === undefined);
  t.equal(Niffler.Comparison.isIdentical(null, undefined), null === undefined);
  t.equal(Niffler.Comparison.isIdentical([1], true), [1] === true);
  t.equal(Niffler.Comparison.isIdentical([], false), [] === false);
  t.equal(Niffler.Comparison.isIdentical([[]], false), [[]] === false);
  t.equal(Niffler.Comparison.isIdentical([0], false), [0] === false);
  t.equal(Niffler.Comparison.isIdentical([1, 2, 3], '1,2,3'), [1, 2, 3] === '1,2,3');
  t.equal(Niffler.Comparison.isIdentical('\r\n\t', 0), '\r\n\t' === 0);

  t.equal(Niffler.Comparison.isIdentical('', '0'), '' === '0');
  t.equal(Niffler.Comparison.isIdentical(0, ''), 0 === '');
  t.equal(Niffler.Comparison.isIdentical(0, '0'), 0 === '0');
  t.equal(Niffler.Comparison.isIdentical(false, 'false'), false === 'false');
  t.equal(Niffler.Comparison.isIdentical(false, '0'), false === '0');
  t.equal(Niffler.Comparison.isIdentical(false, undefined), false === undefined);
  t.equal(Niffler.Comparison.isIdentical(false, null), false === null);

  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Comparison.isIdentical(start, end), start === end);
});
