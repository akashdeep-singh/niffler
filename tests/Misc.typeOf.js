const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Misc.typeof', function (t) {
  t.plan(23);

  let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
  t.equal(Niffler.Misc.typeOf(trees), typeof trees);
  t.equal(Niffler.Misc.typeOf(trees[0]), typeof trees[0]);
  t.equal(Niffler.Misc.typeOf(trees.length), typeof trees.length);

  t.equal(Niffler.Misc.typeOf(Math.PI), typeof Math.PI);

  let mycar = {make: 'Honda', model: 'Accord', year: 1998};
  t.equal(Niffler.Misc.typeOf(mycar), typeof mycar);
  t.equal(Niffler.Misc.typeOf(mycar.make), typeof mycar.make);

  let color1 = new String('green');
  t.equal(Niffler.Misc.typeOf(color1), typeof color1);

  let color2 = 'coral';
  t.equal(Niffler.Misc.typeOf(color2), typeof color2);

  mycar = {make: 'Honda', model: 'Accord', year: 1998};
  delete mycar.make;
  t.equal(Niffler.Misc.typeOf(mycar.make), typeof mycar.make);

  trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple');
  delete trees[3];
  t.equal(Niffler.Misc.typeOf(trees[3]), typeof trees[3]);

  mycar = {make: 'Honda', model: 'Accord', year: 1998};  
  mycar.make = undefined;
  t.equal(Niffler.Misc.typeOf(mycar.make), typeof mycar.make);

  trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple');
  trees[3] = undefined;
  t.equal(Niffler.Misc.typeOf(trees[3]), typeof trees[3]);

  t.equal(Niffler.Misc.typeOf({}), typeof {});
  t.equal(Niffler.Misc.typeOf({}.toString), typeof {}.toString);
  t.equal(Niffler.Misc.typeOf({}.toString()), typeof {}.toString());

  t.equal(Niffler.Misc.typeOf(typeof 1), typeof typeof 1);
  t.equal(Niffler.Misc.typeOf(null), typeof null);
  t.equal(Niffler.Misc.typeOf(undefined), typeof undefined);
  t.equal(Niffler.Misc.typeOf(0), typeof 0);
  t.equal(Niffler.Misc.typeOf(-123), typeof -123);
  t.equal(Niffler.Misc.typeOf(69.68), typeof 69.68);
  t.equal(Niffler.Misc.typeOf('69.68'), typeof '69.68');
  
  let start = Date.now();
  t.equal(Niffler.Misc.typeOf(start), typeof start);
});
