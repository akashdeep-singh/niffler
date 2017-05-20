const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Misc.typeof', function (t) {
  t.plan(20);

  function C() {};
  function D() {};

  let c = new C();
  t.equal(Niffler.Misc.isInstanceOf(c, C), c instanceof C);
  t.equal(Niffler.Misc.isInstanceOf(c, D), c instanceof D);
  t.equal(Niffler.Misc.isInstanceOf(c, Object), c instanceof Object);
  t.equal(Niffler.Misc.isInstanceOf(C.prototype, Object), C.prototype instanceof Object);

  C.prototype = {};
  let c2 = new C();
  t.equal(Niffler.Misc.isInstanceOf(c2, C), c2 instanceof C);
  t.equal(Niffler.Misc.isInstanceOf(c, C), c instanceof C);

  D.prototype = new C();
  let d = new D();
  t.equal(Niffler.Misc.isInstanceOf(d, D), d instanceof D);
  t.equal(Niffler.Misc.isInstanceOf(d, C), d instanceof C);
  
  let simpleStr = 'This is a simple string'; 
  let myString  = new String();
  let newStr    = new String('String created with constructor');
  let myObj     = {};
  t.equal(Niffler.Misc.isInstanceOf(simpleStr, String), simpleStr instanceof String);
  t.equal(Niffler.Misc.isInstanceOf(myString, String), myString instanceof String);
  t.equal(Niffler.Misc.isInstanceOf(newStr, String), newStr instanceof String);
  t.equal(Niffler.Misc.isInstanceOf(myString, Object), myString instanceof Object);
  t.equal(Niffler.Misc.isInstanceOf(myObj, Object), myObj instanceof Object);
  t.equal(Niffler.Misc.isInstanceOf(({}), Object), ({}) instanceof Object);
  t.equal(Niffler.Misc.isInstanceOf(myString, Date), myString instanceof Date);

  let start = Date.now();
  t.equal(Niffler.Misc.isInstanceOf(start, Date), start instanceof Date);
  t.equal(Niffler.Misc.isInstanceOf(start, String), start instanceof String);
  t.equal(Niffler.Misc.isInstanceOf(start, Object), start instanceof Object);

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  let mycar = new Car('Honda', 'Accord', 1998);
  t.equal(Niffler.Misc.isInstanceOf(mycar, Car), mycar instanceof Car);
  t.equal(Niffler.Misc.isInstanceOf(mycar, Object), mycar instanceof Object);


});
