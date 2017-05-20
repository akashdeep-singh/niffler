const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Comparison.isNotStrictlyEqual', function (t) {
  t.plan(21);

  t.equal(Niffler.Comparison.isNotStrictlyEqual(1, 1), 1 !== 1);
  t.equal(Niffler.Comparison.isNotStrictlyEqual(1, '1'), 1 !== '1');
  t.equal(Niffler.Comparison.isNotStrictlyEqual(0, false), 0 !== false);
  t.equal(Niffler.Comparison.isNotStrictlyEqual(0, null), 0 !== null);

  let object1 = { 'value': 'key' }, object2 = { 'value': 'key' };
  t.equal(Niffler.Comparison.isNotStrictlyEqual(object1, object2), object1 !== object2);
  t.equal(Niffler.Comparison.isNotStrictlyEqual(0, undefined), 0 !== undefined);
  t.equal(Niffler.Comparison.isNotStrictlyEqual(null, undefined), null !== undefined);
  t.equal(Niffler.Comparison.isNotStrictlyEqual([1], true), [1] !== true);
  t.equal(Niffler.Comparison.isNotStrictlyEqual([], false), [] !== false);
  t.equal(Niffler.Comparison.isNotStrictlyEqual([[]], false), [[]] !== false);
  t.equal(Niffler.Comparison.isNotStrictlyEqual([0], false), [0] !== false);
  t.equal(Niffler.Comparison.isNotStrictlyEqual([1, 2, 3], '1,2,3'), [1, 2, 3] !== '1,2,3');
  t.equal(Niffler.Comparison.isNotStrictlyEqual('\r\n\t', 0), '\r\n\t' !== 0);

  t.equal(Niffler.Comparison.isNotStrictlyEqual('', '0'), '' !== '0');
  t.equal(Niffler.Comparison.isNotStrictlyEqual(0, ''), 0 !== '');
  t.equal(Niffler.Comparison.isNotStrictlyEqual(0, '0'), 0 !== '0');
  t.equal(Niffler.Comparison.isNotStrictlyEqual(false, 'false'), false !== 'false');
  t.equal(Niffler.Comparison.isNotStrictlyEqual(false, '0'), false !== '0');
  t.equal(Niffler.Comparison.isNotStrictlyEqual(false, undefined), false !== undefined);
  t.equal(Niffler.Comparison.isNotStrictlyEqual(false, null), false !== null);

  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Comparison.isNotStrictlyEqual(start, end), start !== end);
});
