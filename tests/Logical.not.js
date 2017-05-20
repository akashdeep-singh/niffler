const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Logical.not', function (t) {
  t.plan(22);

  t.equal(Niffler.Logical.not(true), !(true));
  t.equal(Niffler.Logical.not(false), !(false));
  t.equal(Niffler.Logical.not('Trevor'), !('Trevor'));
  t.equal(Niffler.Logical.not(''), !(''));
  t.equal(Niffler.Logical.not([]), !([]));
  t.equal(Niffler.Logical.not(['m']), !(['m']));
  t.equal(Niffler.Logical.not([{}]), !([{}]));
  t.equal(Niffler.Logical.not({}), !({}));
  t.equal(Niffler.Logical.not({ 'id': 1 }), !({ 'id': 1 }));
  t.equal(Niffler.Logical.not(null), !(null));
  t.equal(Niffler.Logical.not(undefined), !(undefined));
  t.equal(Niffler.Logical.not(0), !(0));
  t.equal(Niffler.Logical.not('0'), !('0'));
  t.equal(Niffler.Logical.not('Yes'), !('Yes'));
  t.equal(Niffler.Logical.not('No'), !('No'));
  t.equal(Niffler.Logical.not('true'), !('true'));
  t.equal(Niffler.Logical.not('false'), !('false'));
  t.equal(Niffler.Logical.not(1), !(1));
  t.equal(Niffler.Logical.not(-1), !(-1));
  t.equal(Niffler.Logical.not(999.666), !(999.666));
  t.equal(Niffler.Logical.not("\n"), !("\n"));

  let start = Date.now();
  t.equal(Niffler.Logical.not(start), !(start));
});
