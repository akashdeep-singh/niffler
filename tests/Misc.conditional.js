const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Misc.conditional', function (t) {
  t.plan(2);

  t.equal(Niffler.Misc.conditional(Math.PI > 4, 'Yep', 'Nope'), Math.PI > 4 ? 'Yep' : 'Nope');

  let check = false;
  t.equal(Niffler.Misc.conditional(check, 'Access denied', 'Access granted'), check ? 'Access denied' : 'Access granted');

});
