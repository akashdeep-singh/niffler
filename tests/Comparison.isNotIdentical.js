const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Comparison.isNotIdentical', function (t) {
  t.plan(21);

  t.equal(Niffler.Comparison.isNotIdentical(1, 1), 1 !== 1);
  t.equal(Niffler.Comparison.isNotIdentical(1, '1'), 1 !== '1');
  t.equal(Niffler.Comparison.isNotIdentical(0, false), 0 !== false);
  t.equal(Niffler.Comparison.isNotIdentical(0, null), 0 !== null);

  let object1 = { 'value': 'key' }, object2 = { 'value': 'key' };
  t.equal(Niffler.Comparison.isNotIdentical(object1, object2), object1 !== object2);
  t.equal(Niffler.Comparison.isNotIdentical(0, undefined), 0 !== undefined);
  t.equal(Niffler.Comparison.isNotIdentical(null, undefined), null !== undefined);
  t.equal(Niffler.Comparison.isNotIdentical([1], true), [1] !== true);
  t.equal(Niffler.Comparison.isNotIdentical([], false), [] !== false);
  t.equal(Niffler.Comparison.isNotIdentical([[]], false), [[]] !== false);
  t.equal(Niffler.Comparison.isNotIdentical([0], false), [0] !== false);
  t.equal(Niffler.Comparison.isNotIdentical([1, 2, 3], '1,2,3'), [1, 2, 3] !== '1,2,3');
  t.equal(Niffler.Comparison.isNotIdentical('\r\n\t', 0), '\r\n\t' !== 0);

  t.equal(Niffler.Comparison.isNotIdentical('', '0'), '' !== '0');
  t.equal(Niffler.Comparison.isNotIdentical(0, ''), 0 !== '');
  t.equal(Niffler.Comparison.isNotIdentical(0, '0'), 0 !== '0');
  t.equal(Niffler.Comparison.isNotIdentical(false, 'false'), false !== 'false');
  t.equal(Niffler.Comparison.isNotIdentical(false, '0'), false !== '0');
  t.equal(Niffler.Comparison.isNotIdentical(false, undefined), false !== undefined);
  t.equal(Niffler.Comparison.isNotIdentical(false, null), false !== null);

  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Comparison.isNotIdentical(start, end), start !== end);
});
