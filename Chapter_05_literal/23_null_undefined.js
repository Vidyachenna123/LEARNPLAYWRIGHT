// ============================================
// NULL vs UNDEFINED in JavaScript
// ============================================

// UNDEFINED:
// - A variable that has been declared but has not been assigned a value
// - Automatically assigned by JavaScript
// - Type: undefined
// - It means "value is not assigned yet"

// NULL:
// - A variable that has been explicitly set to "nothing" or "no value"
// - Must be assigned by the programmer
// - Type: object (this is a known JavaScript quirk/bug)
// - It means "there is no value here, intentionally"

// ============================================
// Example 1: Undefined (automatic)
// ============================================

let userName;
console.log("userName:", userName);        // undefined
console.log("typeof userName:", typeof userName); // "undefined"

// ============================================
// Example 2: Null (assigned by programmer)
// ============================================

let userEmail = null;
console.log("userEmail:", userEmail);        // null
console.log("typeof userEmail:", typeof userEmail); // "object" (quirk in JS)

// ============================================
// Example 3: Real-world comparison
// ============================================

// Imagine a form:
// - If the user hasn't filled in "age" yet, it is UNDEFINED
// - If the user clears the "age" field, the programmer may set it to NULL

let age;                  // user hasn't entered anything yet
console.log("age:", age); // undefined

age = 25;                 // user enters 25
console.log("age:", age); // 25

age = null;               // user clears the field, programmer sets to null
console.log("age:", age);   // null

// ============================================
// Example 4: Checking with == vs ===
// ============================================

console.log("null == undefined:", null == undefined);   // true  (loose equality)
console.log("null === undefined:", null === undefined); // false (strict equality)

// ============================================
// Quick Summary Table
// ============================================
// | Feature        | undefined          | null               |
// |----------------|--------------------|--------------------|
// | Meaning        | Not assigned yet   | Intentionally empty|
// | Who sets it    | JavaScript         | Programmer         |
// | typeof         | "undefined"        | "object"           |
// | Use case       | Missing value      | Cleared value      |
// ============================================
