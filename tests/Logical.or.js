const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Logical.or', function (t) {
  t.plan(10);

  t.equal(Niffler.Logical.or(true, true), true || true);
  t.equal(Niffler.Logical.or(true, false), true || false);
  t.equal(Niffler.Logical.or(false, true), false || true);
  t.equal(Niffler.Logical.or(false, (3 == 4)), false || (3 == 4));
  t.equal(Niffler.Logical.or('Cat', 'Dog'), 'Cat' || 'Dog');
  t.equal(Niffler.Logical.or(false, 'Cat'), false || 'Cat');
  t.equal(Niffler.Logical.or('Cat', false), 'Cat' || false);
  t.equal(Niffler.Logical.or('', false), '' || false);
  t.equal(Niffler.Logical.or(false, ''), false || '');

  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Logical.or(start, end), start || end);
});
