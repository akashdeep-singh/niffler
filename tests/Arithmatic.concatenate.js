const test = require('tape');
const Niffler = require('../dist/niffler.min.js');

test('Arithmetic.concatenate', function (t) {
  t.plan(38);

  //11 Numbers with Numbers
  t.equal(Niffler.Arithmetic.concatenate(1,1), 1 + 1);
  t.equal(Niffler.Arithmetic.concatenate(0,0), 0 + 0);
  t.equal(Niffler.Arithmetic.concatenate(3.14, 3.14), 3.14 + 3.14);
  t.equal(Niffler.Arithmetic.concatenate(62.777777, 11.77777), 62.777777 + 11.77777);
  t.equal(Niffler.Arithmetic.concatenate(33.33333, 99.99999), 33.33333 + 99.99999);
  t.equal(Niffler.Arithmetic.concatenate(-8, 56), -8 + 56);
  t.equal(Niffler.Arithmetic.concatenate(Number.MAX_VALUE, Number.MAX_VALUE), Number.MAX_VALUE + Number.MAX_VALUE);
  t.equal(Niffler.Arithmetic.concatenate(Number.MIN_VALUE, Number.MIN_VALUE), Number.MIN_VALUE + Number.MIN_VALUE);
  t.equal(Niffler.Arithmetic.concatenate(Number.MAX_VALUE, Number.MIN_VALUE), Number.MAX_VALUE + Number.MIN_VALUE);
  t.equal(Niffler.Arithmetic.concatenate(Number.MIN_VALUE, Number.MAX_VALUE), Number.MIN_VALUE + Number.MAX_VALUE);
  t.equal(Niffler.Arithmetic.concatenate(999, -1024), 999 + -1024);

  //4 Numbers with null
  t.equal(Niffler.Arithmetic.concatenate(null, 456), null + 456);
  t.equal(Niffler.Arithmetic.concatenate(789, null), 789 + null);
  t.equal(Niffler.Arithmetic.concatenate(null, -123.45), null + -123.45);
  t.equal(Niffler.Arithmetic.concatenate(0, null), 0 + null);

  //4 Numbers with undefined
  t.equal(Number.isNaN(Niffler.Arithmetic.concatenate(undefined, 456)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.concatenate(789, undefined)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.concatenate(undefined, -123.45)), true);
  t.equal(Number.isNaN(Niffler.Arithmetic.concatenate(0, undefined)), true);

  //4 Strings with Strings
  t.equal(Niffler.Arithmetic.concatenate("Hippo", "Griff"), "Hippo" + "Griff");
  t.equal(Niffler.Arithmetic.concatenate("", "Griff"), "" + "Griff");
  t.equal(Niffler.Arithmetic.concatenate("Hippo", ""), "Hippo" + "");
  t.equal(Niffler.Arithmetic.concatenate("", ""), "" + "");

  //4 Strings with Numbers
  t.equal(Niffler.Arithmetic.concatenate(1, ""), 1 + "");
  t.equal(Niffler.Arithmetic.concatenate("", 0), "" + 0);
  t.equal(Niffler.Arithmetic.concatenate("", -12), "" + -12);
  t.equal(Niffler.Arithmetic.concatenate(0, ""), 0 + "");

  //5 Strings with null
  t.equal(Niffler.Arithmetic.concatenate(null, "Fang"), null + "Fang");
  t.equal(Niffler.Arithmetic.concatenate("Crookshanks", null), "Crookshanks" + null);
  t.equal(Niffler.Arithmetic.concatenate(null, ""), null + "");
  t.equal(Niffler.Arithmetic.concatenate("", null), "" + null);
  t.equal(Niffler.Arithmetic.concatenate(null, null), null + null);

  //5 Strings with undefined
  t.equal(Niffler.Arithmetic.concatenate(undefined, "Fang"), undefined + "Fang");
  t.equal(Niffler.Arithmetic.concatenate("Crookshanks", undefined), "Crookshanks" + undefined);
  t.equal(Niffler.Arithmetic.concatenate(undefined, ""), undefined + "");
  t.equal(Niffler.Arithmetic.concatenate("", undefined), "" + undefined);
  t.equal(Number.isNaN(Niffler.Arithmetic.concatenate(undefined, undefined)), true);

  //1 Timestamp with Timestamp
  let start = Date.now();
  let end = Date.now();
  t.equal(Niffler.Arithmetic.concatenate(start, end), start + end);
});
