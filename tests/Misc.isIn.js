const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Misc.isIn', function (t) {
  t.plan(15);

  let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
  t.equal(Niffler.Misc.isIn(0, trees), 0 in trees);
  t.equal(Niffler.Misc.isIn(3, trees), 3 in trees);
  t.equal(Niffler.Misc.isIn(6, trees), 6 in trees);
  t.equal(Niffler.Misc.isIn('length', trees), 'length' in trees);
  t.equal(Niffler.Misc.isIn(Symbol.iterator , trees), Symbol.iterator in trees);
  t.equal(Niffler.Misc.isIn('PI', Math), 'PI' in Math);

  let mycar = {make: 'Honda', model: 'Accord', year: 1998};
  t.equal(Niffler.Misc.isIn('make', mycar), 'make' in mycar);
  t.equal(Niffler.Misc.isIn('model', mycar), 'model' in mycar);

  let color1 = new String('green');
  t.equal(Niffler.Misc.isIn('length', color1), 'length' in color1);

  let color2 = 'coral';
  t.throws(() => Niffler.Misc.isIn('length', color2), "TypeError: Cannot use 'in' operator to search for 'length' in coral");

  mycar = {make: 'Honda', model: 'Accord', year: 1998};
  delete mycar.make;
  t.equal(Niffler.Misc.isIn('make', mycar), 'make' in mycar);

  trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple');
  delete trees[3];
  t.equal(Niffler.Misc.isIn(3, trees), 3 in trees);

  mycar = {make: 'Honda', model: 'Accord', year: 1998};  
  mycar.make = undefined;
  t.equal(Niffler.Misc.isIn('make', mycar), 'make' in mycar);

  trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple');
  trees[3] = undefined;
  t.equal(Niffler.Misc.isIn(3, trees), 3 in trees);

  t.equal(Niffler.Misc.isIn('toString', {}), 'toString' in {});
  
});
