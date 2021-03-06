"use strict";
/// <reference types="node" />
exports.__esModule = true;
/**
 * Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The
 * standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/).
 */
var Arithmetic;
(function (Arithmetic) {
    /**
     * The addition operator produces the sum of numeric operands or string concatenation.
     * Operator: x + y
     *
     * @export
     * @param {*} operand1
     * @param {*} operand2
     * @returns {*}
     */
    function add(operand1, operand2) {
        return operand1 + operand2;
    }
    Arithmetic.add = add;
    /**
     * @export
     * @alias of add
     */
    Arithmetic.concatenate = add;
    /**
     * The subtraction operator subtracts the two operands, producing their difference.
     * Operator: x - y
     *
     * @export
     * @param {number} operand1
     * @param {number} operand2
     * @returns {number}
     */
    function subtract(operand1, operand2) {
        return operand1 - operand2;
    }
    Arithmetic.subtract = subtract;
    /**
     * The multiplication operator produces the product of the operands.
     * Operator: x * y
     *
     * @export
     * @param {number} operand1
     * @param {number} operand2
     * @returns {number}
     */
    function multiply(operand1, operand2) {
        return operand1 * operand2;
    }
    Arithmetic.multiply = multiply;
    /**
     * The division operator produces the quotient of its operands where the left operand is the dividend and the right operand is the
     * divisor.
     * Operator: x / y
     *
     * @export
     * @param {number} operand1
     * @param {number} operand2
     * @returns {number}
     */
    function divide(operand1, operand2) {
        return operand1 / operand2;
    }
    Arithmetic.divide = divide;
    /**
     * The remainder operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of
     * the dividend, not the divisor. It uses a built-in modulo function to produce the result, which is the integer remainder of dividing
     * var1 by var2 — for example — var1 modulo var2.
     * Operator: var1 % var2
     *
     * @export
     * @param {number} operand1
     * @param {number} operand2
     * @returns {number}
     */
    function modulous(operand1, operand2) {
        return operand1 % operand2;
    }
    Arithmetic.modulous = modulous;
    /**
     * @alias of modulous
     */
    Arithmetic.remainder = modulous;
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
         * @export
         * @param {number} operand1
         * @param {number} operand2
         * @returns {number}
         */
        Arithmetic.exponentiation = function (operand1, operand2) {
            return Math.pow((operand1), (operand2));
        };
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
    function preIncrement(operand) {
        return ++(operand);
    }
    Arithmetic.preIncrement = preIncrement;
    /**
     * If used postfix, with operator after operand (for example, x++), then it returns the value before incrementing.
     * Operator: x++
     *
     * @export
     * @param {number} operand
     * @returns {number}
     */
    function postIncrement(operand) {
        return (operand)++;
    }
    Arithmetic.postIncrement = postIncrement;
    /**
     * Decrement (--)
     * The decrement operator decrements (subtracts one from) its operand and returns a value.
     */
    /**
     * If used prefix (for example, --x), then it returns the value after decrementing.
     * Operator: --x
     *
     * @export
     * @param {number} operand
     * @returns {number}
     */
    function preDecrement(operand) {
        return --(operand);
    }
    Arithmetic.preDecrement = preDecrement;
    /**
     * If used postfix (for example, x--), then it returns the value before decrementing.
     * Operator: x--
     *
     * @export
     * @param {number} operand
     * @returns {number}
     */
    function postDecrement(operand) {
        return (operand)--;
    }
    Arithmetic.postDecrement = postDecrement;
    /**
     * The unary negation operator precedes its operand and negates it.
     * Operator: -x
     *
     * @export
     * @param {number} operand
     * @returns {number}
     */
    function negate(operand) {
        return -(operand);
    }
    Arithmetic.negate = negate;
    /**
     * The unary plus operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't
     * already. Although unary negation (-) also can convert non-numbers, unary plus is the fastest and preferred way of converting
     * something into a number, because it does not perform any other operations on the number. It can convert string representations of
     * integers and floats, as well as the non-string values true, false, and null. Integers in both decimal and hexadecimal ("0x"-prefixed)
     * formats are supported. Negative numbers are supported (though not for hex). If it cannot parse a particular value, it will evaluate
     * to NaN.
     * Operator: +x
     *
     * @export
     * @param {number} operand
     * @returns {number}
     */
    function plus(operand) {
        return +(operand);
    }
    Arithmetic.plus = plus;
})(Arithmetic = exports.Arithmetic || (exports.Arithmetic = {}));
/**
 * The comparison operators determine, if the two operands meet the given condition.
 */
var Comparison;
(function (Comparison) {
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
    function isEqual(operand1, operand2) {
        return operand1 == operand2;
    }
    Comparison.isEqual = isEqual;
    /**
     * The identity operator returns true if the operands are strictly equal (see above) with no type conversion.
     * Operator: x === y
     *
     * @export
     * @param {*} operand1
     * @param {*} operand2
     * @returns {boolean}
     */
    function isStrictlyEqual(operand1, operand2) {
        return operand1 === operand2;
    }
    Comparison.isStrictlyEqual = isStrictlyEqual;
    /**
     * @export
     * @alias of isStrictlyEqual
     */
    Comparison.isIdentical = isStrictlyEqual;
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
    function isNotEqual(operand1, operand2) {
        return operand1 != operand2;
    }
    Comparison.isNotEqual = isNotEqual;
    /**
     * The non-identity operator returns true if the operands are not equal and/or not of the same type.
     * Operator: x !== y
     *
     * @export
     * @param {*} operand1
     * @param {*} operand2
     * @returns {boolean}
     */
    function isNotStrictlyEqual(operand1, operand2) {
        return operand1 !== operand2;
    }
    Comparison.isNotStrictlyEqual = isNotStrictlyEqual;
    /**
     * @export
     * @alias of isNotStrictlyEqual
     */
    Comparison.isNotIdentical = isNotStrictlyEqual;
    /**
     * The less than operator returns true if the left operand is less than the right operand.
     * Operator: x < y
     *
     * @export
     * @param {*} operand1
     * @param {*} operand2
     * @returns {boolean}
     */
    function isLessThan(operand1, operand2) {
        return operand1 < operand2;
    }
    Comparison.isLessThan = isLessThan;
    /**
     * The less than or equal operator returns true if the left operand is less than or equal to the right operand.
     * Operator: x <= y
     *
     * @export
     * @param {*} operand1
     * @param {*} operand2
     * @returns {boolean}
     */
    function isAtmost(operand1, operand2) {
        return operand1 <= operand2;
    }
    Comparison.isAtmost = isAtmost;
    /**
     * @export
     * @alias of isAtMost
     */
    Comparison.isLessThanOrEqual = isAtmost;
    /**
     * The greater than operator returns true if the left operand is greater than the right operand.
     * Operator: x > y
     *
     * @export
     * @param {*} operand1
     * @param {*} operand2
     * @returns {boolean}
     */
    function isGreaterThan(operand1, operand2) {
        return operand1 > operand2;
    }
    Comparison.isGreaterThan = isGreaterThan;
    /**
     * The greater than or equal operator returns true if the left operand is greater than or equal to the right operand.
     * Operator: x >= y
     *
     * @export
     * @param {*} operand1
     * @param {*} operand2
     * @returns {boolean}
     */
    function isAtleast(operand1, operand2) {
        return operand1 >= operand2;
    }
    Comparison.isAtleast = isAtleast;
    /**
     * @export
     * @alias of isAtLeast
     */
    Comparison.isGreaterThanOrEqual = isAtleast;
})(Comparison = exports.Comparison || (exports.Comparison = {}));
/**
 * Logical operators are typically used with Boolean (logical) values. When they are, they return a Boolean value. However, the && and ||
 * operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may
 * return a non-Boolean value.
 */
var Logical;
(function (Logical) {
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
    function and(operand1, operand2) {
        return operand1 && operand2;
    }
    Logical.and = and;
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
    function or(operand1, operand2) {
        return operand1 || operand2;
    }
    Logical.or = or;
    /**
     * Returns false if its single operand can be converted to true; otherwise, returns true.
     * Operator: !expr
     *
     * @export
     * @param {*} operand
     * @returns {boolean}
     */
    function not(operand) {
        return !(operand);
    }
    Logical.not = not;
})(Logical = exports.Logical || (exports.Logical = {}));
/**
 * Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal
 * numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such
 * binary representations, but they return standard JavaScript numerical values.
 */
var Bitwise;
(function (Bitwise) {
    /**
     * Returns a one in each bit position for which the corresponding bits of both operands are ones.
     * Operator: a & b
     *
     * @export
     * @param {number} operand1
     * @param {number} operand2
     * @returns {number}
     */
    function and(operand1, operand2) {
        return operand1 & operand2;
    }
    Bitwise.and = and;
    /**
     * Returns a one in each bit position for which the corresponding bits of either or both operands are ones.
     * Operator: a | b
     *
     * @export
     * @param {number} operand1
     * @param {number} operand2
     * @returns {number}
     */
    function or(operand1, operand2) {
        return operand1 | operand2;
    }
    Bitwise.or = or;
    /**
     * Inverts the bits of its operand.
     * Operator: ~a
     *
     * @export
     * @param {number} operand
     * @returns {number}
     */
    function not(operand) {
        return ~(operand);
    }
    Bitwise.not = not;
    /**
     * Returns a one in each bit position for which the corresponding bits of either but not both operands are ones.
     * Operator: a ^ b
     *
     * @export
     * @param {number} operand1
     * @param {number} operand2
     * @returns {number}
     */
    function xor(operand1, operand2) {
        return operand1 ^ operand2;
    }
    Bitwise.xor = xor;
    /**
     * Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off.
     * Operator: a >> b
     *
     * @export
     * @param {number} operand1
     * @param {number} operand2
     * @returns {number}
     */
    function rightShift(operand1, operand2) {
        return operand1 >> operand2;
    }
    Bitwise.rightShift = rightShift;
    /**
     * @export
     * @alias of rightShift
     */
    Bitwise.signPropagatingRightShift = rightShift;
    /**
     * Shifts a in binary representation b (< 32) bits to the left, shifting in zeroes from the right.
     * Operator: a << b
     *
     * @export
     * @param {number} operand1
     * @param {number} operand2
     * @returns {number}
     */
    function leftShift(operand1, operand2) {
        return operand1 << operand2;
    }
    Bitwise.leftShift = leftShift;
    /**
     * Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off, and shifting in zeroes from the left.
     * Operator: a >>> b
     *
     * @export
     * @param {number} operand1
     * @param {number} operand2
     * @returns {number}
     */
    function unsignedRightShift(operand1, operand2) {
        return operand1 >>> operand2;
    }
    Bitwise.unsignedRightShift = unsignedRightShift;
    /**
     * @export
     * @alias of unsignedRightShift
     */
    Bitwise.zeroFillRightLeft = unsignedRightShift;
})(Bitwise = exports.Bitwise || (exports.Bitwise = {}));
/**
 * Some miscellaneous operators.
 */
var Misc;
(function (Misc) {
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
    function conditional(condition, ifTrue, ifFalse) {
        return (condition ? ifTrue : ifFalse);
    }
    Misc.conditional = conditional;
    /**
     * The typeof operator returns a string indicating the type of the unevaluated operand.
     * Operator: typeof operand
     *
     * @export
     * @param {*} operand
     * @returns {string}
     */
    function typeOf(operand) {
        return typeof operand;
    }
    Misc.typeOf = typeOf;
    /**
     * The in operator returns true if the specified property is in the specified object.
     * Operator: prop in objectName
     *
     * @export
     * @param {*} prop
     * @param {*} objectName
     * @returns {boolean}
     */
    function isIn(prop, objectName) {
        return prop in objectName;
    }
    Misc.isIn = isIn;
    /**
     * The instanceof operator tests whether an object has in its prototype chain the prototype property of a constructor.
     * Operator: object instanceof constructor
     *
     * @export
     * @param {*} object
     * @param {*} constructor
     * @returns {boolean}
     */
    function isInstanceOf(object, constructor) {
        return object instanceof constructor;
    }
    Misc.isInstanceOf = isInstanceOf;
})(Misc = exports.Misc || (exports.Misc = {}));
