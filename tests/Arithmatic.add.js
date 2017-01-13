const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Arithmetic.add', function (t) {
  t.plan(38);

  //11 Numbers with Numbers
  t.equal(Niffler.Arithmetic.add(1,1), 1 + 1);
  t.equal(Niffler.Arithmetic.add(0,0), 0 + 0);
  t.equal(Niffler.Arithmetic.add(3.14, 3.14), 3.14 + 3.14);
  t.equal(Niffler.Arithmetic.add(62.777777, 11.77777), 62.777777 + 11.77777);
  t.equal(Niffler.Arithmetic.add(33.33333, 99.99999), 33.33333 + 99.99999);
  t.equal(Niffler.Arithmetic.add(-8, 56), -8 + 56);
  t.equal(Niffler.Arithmetic.add(Number.MAX_VALUE, Number.MAX_VALUE), Number.MAX_VALUE + Number.MAX_VALUE);
  t.equal(Niffler.Arithmetic.add(Number.MIN_VALUE, Number.MIN_VALUE), Number.MIN_VALUE + Number.MIN_VALUE);
  t.equal(Niffler.Arithmetic.add(Number.MAX_VALUE, Number.MIN_VALUE), Number.MAX_VALUE + Number.MIN_VALUE);
  t.equal(Niffler.Arithmetic.add(Number.MIN_VALUE, Number.MAX_VALUE), Number.MIN_VALUE + Number.MAX_VALUE);
  t.equal(Niffler.Arithmetic.add(999, -1024), 999 + -1024);

  //4 Numbers with null
  t.equal(Niffler.Arithmetic.add(null, 456), null + 456);
  t.equal(Niffler.Arithmetic.add(789, null), 789 + null);
  t.equal(Niffler.Arithmetic.add(null, -123.45), null + -123.45);
  t.equal(Niffler.Arithmetic.add(0, null), 0 + null);

  //4 Numbers with undefined
  t.equal(Number.isNaN(Niffler.Arithmetic.add(undefined, 456)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.add(789, undefined)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.add(undefined, -123.45)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.add(0, undefined)), true);

  //4 Strings with Strings
  t.equal(Niffler.Arithmetic.add("Hippo", "Griff"), "Hippo" + "Griff");
  t.equal(Niffler.Arithmetic.add("", "Griff"), "" + "Griff");
  t.equal(Niffler.Arithmetic.add("Hippo", ""), "Hippo" + "");
  t.equal(Niffler.Arithmetic.add("", ""), "" + "");

  //4 Strings with Numbers
  t.equal(Niffler.Arithmetic.add(1, ""), 1 + "");
  t.equal(Niffler.Arithmetic.add("", 0), "" + 0);
  t.equal(Niffler.Arithmetic.add("", -12), "" + -12);
  t.equal(Niffler.Arithmetic.add(0, ""), 0 + "");

  //5 Strings with null
  t.equal(Niffler.Arithmetic.add(null, "Fang"), null + "Fang");
  t.equal(Niffler.Arithmetic.add("Crookshanks", null), "Crookshanks" + null);
  t.equal(Niffler.Arithmetic.add(null, ""), null + "");
  t.equal(Niffler.Arithmetic.add("", null), "" + null);
  t.equal(Niffler.Arithmetic.add(null, null), null + null);

  //5 Strings with undefined
  t.equal(Niffler.Arithmetic.add(undefined, "Fang"), undefined + "Fang");
  t.equal(Niffler.Arithmetic.add("Crookshanks", undefined), "Crookshanks" + undefined);
  t.equal(Niffler.Arithmetic.add(undefined, ""), undefined + "");
  t.equal(Niffler.Arithmetic.add("", undefined), "" + undefined);
  t.equal(Number.isNaN(Niffler.Arithmetic.add(undefined, undefined)), true);

  //1 Timestamp with Timestamp
  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Arithmetic.add(start, end), start + end);
});
