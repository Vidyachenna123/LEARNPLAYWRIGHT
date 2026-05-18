// ============================================
// JavaScript Number Types / Literals
// ============================================
// JavaScript has only ONE numeric type: Number
// It can represent integers, decimals, and special values.
// BigInt is a separate type for very large integers.
// ============================================

// 1. INTEGER (Whole Number)
// --------------------------------------------
let age = 25;
let temperature = -10;
let year = 2024;

console.log("Integer:", age);           // 25
console.log("Negative Integer:", temperature); // -10
console.log("typeof age:", typeof age); // "number"


// 2. FLOATING-POINT (Decimal Number)
// --------------------------------------------
let price = 19.99;
let pi = 3.14159;
let negativeDecimal = -0.5;

console.log("Float:", price);           // 19.99
console.log("Pi:", pi);                 // 3.14159
console.log("typeof price:", typeof price); // "number"


// 3. SCIENTIFIC NOTATION (Exponential)
// --------------------------------------------
// Used for very large or very small numbers
// e.g., 1e3 = 1 * 10^3 = 1000
// e.g., 1e-3 = 1 * 10^-3 = 0.001

let bigNumber = 1e6;        // 1,000,000
let smallNumber = 1e-3;     // 0.001
let nano = 2.5e-9;          // 0.0000000025

console.log("Scientific 1e6:", bigNumber);    // 1000000
console.log("Scientific 1e-3:", smallNumber); // 0.001
console.log("Scientific 2.5e-9:", nano);      // 2.5e-9


// 4. HEXADECIMAL (Base 16)
// --------------------------------------------
// Prefix: 0x or 0X
// Used for colors, memory addresses, etc.

let hexColor = 0xFF;        // 255 in decimal
let hexGreen = 0x00FF00;    // 65280 in decimal

console.log("Hex 0xFF:", hexColor);         // 255
console.log("Hex 0x00FF00:", hexGreen);     // 65280


// 5. OCTAL (Base 8)
// --------------------------------------------
// Prefix: 0o or 0O

let octalNumber = 0o77;     // 63 in decimal (7*8 + 7)

console.log("Octal 0o77:", octalNumber);    // 63


// 6. BINARY (Base 2)
// --------------------------------------------
// Prefix: 0b or 0B

let binaryNumber = 0b1010;  // 10 in decimal
let binaryByte = 0b11111111;// 255 in decimal

console.log("Binary 0b1010:", binaryNumber);     // 10
console.log("Binary 0b11111111:", binaryByte);   // 255


// 7. SPECIAL NUMERIC VALUES
// ============================================

// INFINITY
// --------------------------------------------
// Represents a number larger than any other number
let max = Infinity;
let positiveInfinity = 1 / 0;   // Infinity
let negativeInfinity = -1 / 0;  // -Infinity

console.log("Infinity:", max);                  // Infinity
console.log("1 / 0:", positiveInfinity);       // Infinity
console.log("-1 / 0:", negativeInfinity);       // -Infinity
console.log("typeof Infinity:", typeof Infinity); // "number"


// NaN (Not a Number)
// --------------------------------------------
// Represents an invalid or unrepresentable numeric value
let notANumber = NaN;
let invalidCalc = "hello" * 5;  // Trying to multiply string by number
let sqrtNegative = Math.sqrt(-1); // Square root of negative number

console.log("NaN:", notANumber);                // NaN
console.log("'hello' * 5:", invalidCalc);       // NaN
console.log("Math.sqrt(-1):", sqrtNegative);     // NaN
console.log("typeof NaN:", typeof NaN);         // "number"

// Important: NaN is the ONLY value in JavaScript that is NOT equal to itself!
console.log("NaN === NaN:", NaN === NaN);       // false


// 8. BIGINT (Arbitrary-precision integers)
// ============================================
// Used for integers larger than Number.MAX_SAFE_INTEGER (9007199254740991)
// Suffix: n

let bigIntLiteral = 123456789012345678901234567890n;
let bigSum = 9007199254740991n + 1n;

console.log("BigInt:", bigIntLiteral);          // 123456789012345678901234567890n
console.log("BigInt sum:", bigSum);              // 9007199254740992n
console.log("typeof BigInt:", typeof bigIntLiteral); // "bigint"


// ============================================
// Summary Table
// ============================================
// | Type             | Example              | typeof    |
// |------------------|----------------------|-----------|
// | Integer          | 25                   | "number"  |
// | Float            | 19.99                | "number"  |
// | Scientific       | 1e6                  | "number"  |
// | Hexadecimal      | 0xFF                 | "number"  |
// | Octal            | 0o77                 | "number"  |
// | Binary           | 0b1010               | "number"  |
// | Infinity         | Infinity             | "number"  |
// | NaN              | NaN                  | "number"  |
// | BigInt           | 123n                 | "bigint"  |
// ============================================
