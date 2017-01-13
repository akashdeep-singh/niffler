/// <reference types="node" />

/**
 * Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The 
 * standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/).
 */
export namespace Arithmetic {

  /**
   * The addition operator produces the sum of numeric operands or string concatenation.
   * Operator: x + y
   * 
   * @param {*} operand1
   * @param {*} operand2
   * @returns {*}
   */
  export function add(operand1: any, operand2: any): any {
    return operand1 + operand2;
  }

  /**
   * @alias of add
   */
  export let concatenate = add;

  /**
   * The subtraction operator subtracts the two operands, producing their difference.
   * Operator: x - y
   * 
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function subtract(operand1: number, operand2: number): number {
    return operand1 - operand2;
  }

  /**
   * The multiplication operator produces the product of the operands.
   * Operator: x * y
   * 
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function multiply(operand1: number, operand2: number): number {
    return operand1 * operand2;
  }

  /**
   * The division operator produces the quotient of its operands where the left operand is the dividend and the right operand is the 
   * divisor.
   * Operator: x / y
   * 
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function divide(operand1: number, operand2: number): number {
    return operand1 / operand2;
  }

  /**
   * The remainder operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of 
   * the dividend, not the divisor. It uses a built-in modulo function to produce the result, which is the integer remainder of dividing 
   * var1 by var2 — for example — var1 modulo var2.
   * Operator: var1 % var2
   * 
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function modulous(operand1: number, operand2: number): number {
    return operand1 % operand2;
  }

  /**
   * @alias of modulous
   */
  export let remainder = modulous;

  //This is an experimental operator, part of the ECMAScript 2016 (ES7) proposal. It is only available in node 7.2.0 and above.
  export let exponentiation;
  if (parseFloat(process.versions.node) >= 7.2) {
    /**
     * The exponentiation operator returns the result of raising first operand to the power second operand. that is, var1 raised to the 
     * power var2, in the preceding statement, where var1 and var2 are variables. Exponentiation operator is right associative.
     * a ** b ** c is equal to a ** (b ** c).
     * In most languages like PHP and Python and others that have an exponentiation operator (typically ^ or **), the exponentiation 
     * operator is defined to have a higher precedence than unary operators such as unary + and unary -, but there are a few exceptions. 
     * For example, in Bash the ** operator is defined to have a lower precedence than unary operators. In JavaScript, it is impossible to 
     * write an ambiguous exponentiation expression, i.e. you cannot put a unary operator (+/-/~/!/delete/void/typeof) immediately before 
     * the base number.
     * Operator: var1 ** var2
     * 
     * @param {number} operand1
     * @param {number} operand2
     * @returns {number}
     */
    exponentiation = function (operand1: number, operand2: number): number {
      return (operand1) ** (operand2);
    }
  }

  /**
   * Increment (++)
   * The increment operator increments (adds one to) its operand and returns a value.
   */

  /**
   * If used prefix with operator before operand (for example, ++x), then it returns the value after incrementing.
   * Operator: ++x
   * 
   * @export
   * @param {number} operand
   * @returns {number}
   */
  export function preIncrement(operand: number): number {
    return ++(operand);
  }

  /**
   * If used postfix, with operator after operand (for example, x++), then it returns the value before incrementing.
   * Operator: x++
   * 
   * @param {number} operand
   * @returns {number}
   */
  export function postIncrement(operand: number): number {
    return (operand)++;
  }

  /**
   * Decrement (--)
   * The decrement operator decrements (subtracts one from) its operand and returns a value.
   */

  /**
   * If used prefix (for example, --x), then it returns the value after decrementing.
   * Operator: --x
   * 
   * @param {number} operand
   * @returns {number}
   */
  export function preDecrement(operand: number): number {
    return --(operand);
  }

  /**
   * If used postfix (for example, x--), then it returns the value before decrementing.
   * Operator: x--
   * 
   * @param {number} operand
   * @returns {number}
   */
  export function postDecrement(operand: number): number {
    return (operand)--;
  }

  /**
   * The unary negation operator precedes its operand and negates it.
   * Operator: -x
   * 
   * @param {number} operand
   * @returns {number}
   */
  function negate(operand: number): number {
    return -(operand);
  }

  /**
   * The unary plus operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't 
   * already. Although unary negation (-) also can convert non-numbers, unary plus is the fastest and preferred way of converting 
   * something into a number, because it does not perform any other operations on the number. It can convert string representations of 
   * integers and floats, as well as the non-string values true, false, and null. Integers in both decimal and hexadecimal ("0x"-prefixed) 
   * formats are supported. Negative numbers are supported (though not for hex). If it cannot parse a particular value, it will evaluate 
   * to NaN.
   * Operator: +x
   * 
   * @param {number} operand
   * @returns {number}
   */
  function plus(operand: number): number {
    return +(operand);
  }
}

/**
 * The comparison operators determine, if the two operands meet the given condition.
 */
export namespace Comparison {

  /**
   * The equality operator converts the operands if they are not of the same type, then applies strict comparison. If both operands are 
   * objects, then JavaScript compares internal references which are equal when operands refer to the same object in memory.
   * Operator: x == y
   * 
   * @export
   * @param {*} operand1
   * @param {*} operand2
   * @returns {boolean}
   */
  export function isEqual(operand1: any, operand2: any): boolean {
    return operand1 == operand2;
  }

  /**
   * The identity operator returns true if the operands are strictly equal (see above) with no type conversion. 
   * Operator: x === y
   * 
   * @export
   * @param {*} operand1
   * @param {*} operand2
   * @returns {boolean}
   */
  export function isStrictlyEqual(operand1: any, operand2: any): boolean {
    return operand1 === operand2;
  }

  /**
   * @alias of isStrictlyEqual
   */
  export let isIdentical = isStrictlyEqual;

  /**
   * The inequality operator returns true if the operands are not equal. If the two operands are not of the same type, JavaScript attempts 
   * to convert the operands to an appropriate type for the comparison. If both operands are objects, then JavaScript compares internal 
   * references which are not equal when operands refer to different objects in memory.
   * Operator: x != y
   * 
   * @export
   * @param {*} operand1
   * @param {*} operand2
   * @returns {boolean}
   */
  export function isNotEqual(operand1: any, operand2: any): boolean {
    return operand1 != operand2;
  }

  /**
   * The non-identity operator returns true if the operands are not equal and/or not of the same type.
   * Operator: x !== y 
   * 
   * @export
   * @param {*} operand1
   * @param {*} operand2
   * @returns {boolean}
   */
  export function isNotStrictlyEqual(operand1: any, operand2: any): boolean {
    return operand1 !== operand2;
  }

  /**
   * @alias of isNotStrictlyEqual
   */
  export let isNotIdentical = isNotStrictlyEqual;

  /**
   * The less than operator returns true if the left operand is less than the right operand.
   * Operator: x < y
   * 
   * @export
   * @param {*} operand1
   * @param {*} operand2
   * @returns {boolean}
   */
  export function isLessThan(operand1: any, operand2: any): boolean {
    return operand1 < operand2;
  }

  /**
   * The less than or equal operator returns true if the left operand is less than or equal to the right operand.
   * Operator: x <= y
   * 
   * @export
   * @param {*} operand1
   * @param {*} operand2
   * @returns {boolean}
   */
  export function isAtMost(operand1: any, operand2: any): boolean {
    return operand1 <= operand2;
  }

  /**
   * @alias of isAtMost
   */
  export let isLessThanOrEqual = isAtMost;

  /**
   * The greater than operator returns true if the left operand is greater than the right operand.
   * Operator: x > y
   * 
   * @export
   * @param {*} operand1
   * @param {*} operand2
   * @returns {boolean}
   */
  export function isGreaterThan(operand1: any, operand2: any): boolean {
    return operand1 < operand2;
  }

  /**
   * The greater than or equal operator returns true if the left operand is greater than or equal to the right operand.
   * Operator: x >= y
   * 
   * @export
   * @param {*} operand1
   * @param {*} operand2
   * @returns {boolean}
   */
  export function isAtLeast(operand1: any, operand2: any): boolean {
    return operand1 >= operand2;
  }

  /**
   * @alias of isAtLeast
   */
  export let isGreaterThanOrEqual = isAtMost;

}

/**
 * Logical operators are typically used with Boolean (logical) values. When they are, they return a Boolean value. However, the && and || 
 * operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may 
 * return a non-Boolean value.
 */
export namespace Logical {

  /**
   * Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, && returns true if both 
   * operands are true; otherwise, returns false.
   * Operator: expr1 && expr2
   * 
   * @export
   * @param {*} operand1
   * @param {*} operand2
   * @returns {boolean}
   */
  export function and(operand1: any, operand2: any): boolean {
    return operand1 && operand2;
  }

  /**
   * Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, || returns true if 
   * either operand is true.
   * Operator: expr1 || expr2
   * 
   * @export
   * @param {*} operand1
   * @param {*} operand2
   * @returns {boolean}
   */
  export function or(operand1: any, operand2: any): boolean {
    return operand1 || operand2;
  }

  /**
   * Returns false if its single operand can be converted to true; otherwise, returns true.
   * Operator: !expr
   * 
   * @export
   * @param {*} operand
   * @returns {boolean}
   */
  export function not(operand: any): boolean {
    return !(operand);
  }
}

/**
 * Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal 
 * numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such 
 * binary representations, but they return standard JavaScript numerical values.
 */
export namespace Bitwise {

  /**
   * Returns a one in each bit position for which the corresponding bits of both operands are ones.
   * Operator: a & b
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function and(operand1: number, operand2: number): number {
    return operand1 & operand2;
  }

  /**
   * Returns a one in each bit position for which the corresponding bits of either or both operands are ones.
   * Operator: a | b
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function or(operand1: number, operand2: number): number {
    return operand1 | operand2;
  }

  /**
   * Inverts the bits of its operand.
   * Operator: ~a
   * 
   * @export
   * @param {number} operand
   * @returns {number}
   */
  export function not(operand: number): number {
    return ~(operand);
  }

  /**
   * Returns a one in each bit position for which the corresponding bits of either but not both operands are ones.
   * Operator: a ^ b
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function xor(operand1: number, operand2: number): number {
    return operand1 ^ operand2;
  }

  /**
   * Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off.
   * Operator: a >> b
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function rightShift(operand1: number, operand2: number): number {
    return operand1 >> operand2;
  }

  /**
   * @alias of rightShift
   */
  export let signPropagatingRightShift = rightShift;

  /**
   * Shifts a in binary representation b (< 32) bits to the left, shifting in zeroes from the right.
   * Operator: a << b
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function leftShift(operand1: number, operand2: number): number {
    return operand1 << operand2;
  }

  /**
   * Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off, and shifting in zeroes from the left.
   * Operator: a >>> b
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function unsignedRightShift(operand1: number, operand2: number): number {
    return operand1 >>> operand2;
  }

  /**
   * @alias of unsignedRightShift
   */
  export let zeroFillRightLeft = unsignedRightShift;
}

/**
 * An assignment operator assigns a value to its left operand based on the value of its right operand.
 */
export namespace Assignment {

  /**
   * The addition assignment operator adds the value of the right operand to a variable and assigns the result to the variable. The types 
   * of the two operands determine the behavior of the addition assignment operator. Addition or concatenation is possible.
   * Operator: x += y 
   * Meaning:  x = x + y
   * 
   * @export
   * @param {*} operand1
   * @param {*} operand2
   * @returns {*}
   */
  export function add(operand1: any, operand2: any): any {
    return operand1 += operand2;
  }

  /**
   * @alias of add
   */
  export let concatenate = add;

  /**
   * The subtraction assignment operator subtracts the value of the right operand from a variable and assigns the result to the variable.
   * Operator: x -= y 
   * Meaning:  x  = x - y
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function subtract(operand1: number, operand2: number): number {
    return operand1 -= operand2;
  }

  /**
   * The multiplication assignment operator multiplies a variable by the value of the right operand and assigns the result to the variable.
   * Operator: x *= y 
   * Meaning:  x  = x * y
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function multiply(operand1: number, operand2: number): number {
    return operand1 *= operand2;
  }

  /**
   * The division assignment operator divides a variable by the value of the right operand and assigns the result to the variable.
   * Operator: x /= y 
   * Meaning:  x  = x / y
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function divide(operand1: number, operand2: number): number {
    return operand1 /= operand2;
  }

  /**
   * The remainder assignment operator divides a variable by the value of the right operand and assigns the remainder to the variable.
   * Operator: x %= y
   * Meaning:  x  = x % y
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function modulous(operand1: number, operand2: number): number {
    return operand1 %= operand2;
  }

  /**
   * @alias of modulous
   */
  export let remainder = modulous;

  //This is an experimental operator, part of the ECMAScript 2016 (ES7) proposal. It is only available in node 7.2.0 and above.
  export let exponentiation;
  if (parseFloat(process.versions.node) >= 7.2) {
    /**
     * The exponentiation assignment operator evaluates to the result of raising first operand to the power second operand.
     * Operator: x **= y 
     * Meaning:  x  = x ** y
     * 
     * @param {number} operand1
     * @param {number} operand2
     * @returns {number}
     */
    exponentiation = function (operand1: number, operand2: number): number {
      return (operand1) **= (operand2);
    }
  }

  /**
   * The bitwise AND assignment operator uses the binary representation of both operands, does a bitwise AND operation on them and assigns 
   * the result to the variable.
   * Operator: x &= y 
   * Meaning:  x  = x & y
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function and(operand1: number, operand2: number): number {
    return operand1 &= operand2;
  }

  /**
   * The bitwise OR assignment operator uses the binary representation of both operands, does a bitwise OR operation on them and assigns 
   * the result to the variable.
   * Operator: x |= y 
   * Meaning:  x  = x | y
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function or(operand1: number, operand2: number): number {
    return operand1 |= operand2;
  }

  /**
   * The bitwise XOR assignment operator uses the binary representation of both operands, does a bitwise XOR operation on them and assigns 
   * the result to the variable.
   * Operator: x ^= y 
   * Meaning:  x  = x ^ y
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function xor(operand1: number, operand2: number): number {
    return operand1 ^= operand2;
  }

  /**
   * The right shift assignment operator moves the specified amount of bits to the right and assigns the result to the variable.
   * Operator: x >>= y 
   * Meaning:  x   = x >> y
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function rightShift(operand1: number, operand2: number): number {
    return operand1 >>= operand2;
  }

  /**
   * @alias of rightShift
   */
  export let signPropagatingRightShift = rightShift;

  /**
   * The left shift assignment operator moves the specified amount of bits to the left and assigns the result to the variable.
   * Operator: x <<= y 
   * Meaning:  x   = x << y
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function leftShift(operand1: number, operand2: number): number {
    return operand1 <<= operand2;
  }

  /**
   * The unsigned right shift assignment operator moves the specified amount of bits to the right and assigns the result to the variable.
   * Operator: x >>>= y 
   * Meaning:  x    = x >>> y
   * 
   * @export
   * @param {number} operand1
   * @param {number} operand2
   * @returns {number}
   */
  export function unsignedRightShift(operand1: number, operand2: number): number {
    return operand1 >>>= operand2;
  }

  /**
   * @alias of unsignedRightShift
   */
  export let zeroFillRightLeft = unsignedRightShift;
}

/**
 * Some miscellaneous operators.
 */
export namespace Misc {

  /**
   * The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a 
   * shortcut for the if statement.
   * Operator: condition ? expr1 : expr2 
   * 
   * @export
   * @param {boolean} condition
   * @param {*} ifTrue
   * @param {*} ifFalse
   * @returns {*}
   */
  export function conditional(condition: boolean, ifTrue: any, ifFalse: any): any {
    return (condition ? ifTrue : ifFalse);
  }

  /**
   * The typeof operator returns a string indicating the type of the unevaluated operand.
   * Operator: typeof operand
   * 
   * @export
   * @param {*} operand
   * @returns {string}
   */
  export function typeOf(operand: any): string {
    return typeof operand;
  }

  /**
   * The in operator returns true if the specified property is in the specified object.
   * Operator: prop in objectName
   * 
   * @export
   * @param {*} prop
   * @param {*} objectName
   * @returns {boolean}
   */
  export function isIn(prop: any, objectName: any): boolean {
    return prop in objectName;
  }

  /**
   * The instanceof operator tests whether an object has in its prototype chain the prototype property of a constructor.
   * Operator: object instanceof constructor
   * 
   * @export
   * @param {*} object
   * @param {*} constructor
   * @returns {boolean}
   */
  export function isInstanceOf(object: any, constructor: any): boolean {
    return object instanceof constructor;
  }
}
