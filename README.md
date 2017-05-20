# Niffler
Functions for Javascript operators.

Project platform: NodeJs

Dependencies: none

## Installation ##

```javascript
npm install niffler // or npm i niffler
```

## Getting Started ##

### Import the class ###

```javascript
var Niffler = require('niffler');
```
### Example calls ###

```javascript
Niffler.Arithmetic.add(2,2);            //4
Niffler.Arithmetic.subtract(2,2);       //0
Niffler.Arithmetic.multiply(2,2);       //4
Niffler.Arithmetic.divide(2,2);         //1
```

Docs for Javascript operators:
* http://web.eecs.umich.edu/~bartlett/jsops.html
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Conditional_(ternary)_operator
* https://en.wikibooks.org/wiki/JavaScript/Operators

## API reference

#### Arithmetic
```
add, concatenate, subtract, multiply, divide, modulous, remainder,
exponentiation (Only available in Node 7.2.0), preIncrement,
postIncrement, preDecrement, postDecrement, negate, plus
```


#### Comparison
```
isEqual, isStrictlyEqual, isIdentical, isNotEqual, isNotStrictlyEqual,
isNotIdentical, isLessThan, isAtmost, isLessThanOrEqual, isGreaterThan,
isAtleast, isGreaterThanOrEqual
```


#### Logical
```
and, or, not
```


#### Bitwise
```
and, or, not, xor, rightShift, signPropagatingRightShift, leftShift,
unsignedRightShift, zeroFillRightLeft
```


#### Misc
```
conditional, typeOf, isIn, isInstanceOf
```


## Future
* Exhaustive Unit tests for all of the functions in Tape
* Coverage tests with Istanbul

## Notes
* The project is in a very early Alpha stage and must be used with caution.
* I've built a browserified version in the dist directory, but haven't tested it out yet

## License

The MIT License (MIT)

Copyright (c) 2016 Akashdeep Singh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
