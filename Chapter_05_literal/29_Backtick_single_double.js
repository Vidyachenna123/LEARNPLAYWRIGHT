// ============================================
// Strings in JavaScript: Single vs Double vs Backtick
// ============================================

// 1. SINGLE QUOTES ('')
// - Simple text strings
// - Cannot contain variables or expressions
let name1 = 'Sree';
console.log("Single quote:", name1); // Sree


// 2. DOUBLE QUOTES ("")
// - Same as single quotes, just style preference
// - Cannot contain variables or expressions
let name2 = "Vidya";
console.log("Double quote:", name2); // Vidya


// 3. BACKTICKS / TEMPLATE LITERALS (``)
// - Can contain variables using ${}
// - Can contain expressions
// - Supports multi-line strings
let age = 25;
let greeting = `Hello, ${name1} ${name2}! You are ${age} years old.`;
console.log("Backtick:", greeting); // Hello, Sree Vidya! You are 25 years old.


// ============================================
// QUICK DIFFERENCE TABLE
// ============================================
// | Feature          | ' ' / " " | ` `        |
// |------------------|-----------|------------|
// | String value     |    Yes    |    Yes     |
// | Variable embed   |    No     |    Yes     |
// | Expression embed |    No     |    Yes     |
// | Multi-line       |    No     |    Yes     |
// ============================================
