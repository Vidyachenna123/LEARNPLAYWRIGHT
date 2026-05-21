// ============================================
// Confusing Comparisons: == vs === in JavaScript
// ============================================
// ==  : Loose Equality  -> Compares VALUES only (type coercion happens)
// === : Strict Equality -> Compares VALUES and TYPES (no coercion)
// BEST PRACTICE: Always use === to avoid unexpected results
// ============================================

// 1. NUMBER vs STRING
// --------------------------------------------
console.log("1. NUMBER vs STRING");
console.log("5 == '5':", 5 == "5");      // true  (string '5' becomes number 5)
console.log("5 === '5':", 5 === "5");    // false (different types: number vs string)


// 2. TRUE / FALSE vs NUMBER
// --------------------------------------------
console.log("\n2. BOOLEAN vs NUMBER");
console.log("true == 1:", true == 1);       // true  (true becomes 1)
console.log("true === 1:", true === 1);     // false (boolean vs number)
console.log("false == 0:", false == 0);     // true  (false becomes 0)
console.log("false === 0:", false === 0);   // false (boolean vs number)


// 3. EMPTY STRING vs FALSE / ZERO
// --------------------------------------------
console.log("\n3. EMPTY STRING vs FALSE/ZERO");
console.log("'' == false:", "" == false);    // true  (empty string becomes 0, false becomes 0)
console.log("'' === false:", "" === false);  // false (string vs boolean)
console.log("'' == 0:", "" == 0);            // true  (empty string becomes 0)
console.log("'' === 0:", "" === 0);          // false (string vs number)


// 4. NULL vs UNDEFINED
// --------------------------------------------
console.log("\n4. NULL vs UNDEFINED");
console.log("null == undefined:", null == undefined);    // true  (special rule in JS)
console.log("null === undefined:", null === undefined);  // false (different types)
console.log("null == 0:", null == 0);                  // false (null does NOT become 0 with ==)
console.log("undefined == 0:", undefined == 0);        // false (undefined does NOT become 0)


// 5. ARRAY vs STRING / NUMBER
// --------------------------------------------
console.log("\n5. ARRAY vs STRING/NUMBER");
console.log("[] == '':", [] == "");           // true  (array becomes empty string)
console.log("[] === '':", [] === "");         // false (array vs string)
console.log("[1] == 1:", [1] == 1);           // true  (array becomes number 1)
console.log("[1] === 1:", [1] === 1);         // false (array vs number)


// ============================================
// QUICK SUMMARY TABLE
// ============================================
// | Expression               | ==    | ===   |
// |--------------------------|-------|-------|
// | 5 == '5'                 | true  | false |
// | true == 1                | true  | false |
// | false == 0               | true  | false |
// | '' == false              | true  | false |
// | '' == 0                  | true  | false |
// | null == undefined        | true  | false |
// | null == 0                | false | false |
// | [] == ''                 | true  | false |
// | [1] == 1                 | true  | false |
// ============================================
// RULE: Use === always to avoid confusing type coercion!
