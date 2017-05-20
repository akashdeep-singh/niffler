const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Logical.and', function (t) {
  t.plan(9);

  t.equal(Niffler.Logical.and(true, true), true && true);
  t.equal(Niffler.Logical.and(true, false), true && false);
  t.equal(Niffler.Logical.and(false, true), false && true);
  t.equal(Niffler.Logical.and(false, (3 == 4)), false && (3 == 4));
  t.equal(Niffler.Logical.and('Cat', 'Dog'), 'Cat' && 'Dog');
  t.equal(Niffler.Logical.and(false, 'Cat'), false && 'Cat');
  t.equal(Niffler.Logical.and('Cat', false), 'Cat' && false);
  t.equal(Niffler.Logical.and('', false), '' && false);

  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Logical.and(start, end), start && end);
});
