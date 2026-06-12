# Interview Questions & Concepts

This file contains common interview questions and concepts for JavaScript, Playwright, and QA Automation.

---

## Why Use `const` for Objects Instead of `let` or `var`?

### The Core Difference

```javascript
const obj1 = {a: 1, b: 2};

// This is ALLOWED (mutating the object itself)
obj1.a = 10;          // ✅ Works fine
obj1.b = 20;          // ✅ Works fine

// This is NOT ALLOWED (reassigning the reference)
obj1 = {x: 100};      // ❌ TypeError: Assignment to constant variable
```

### Why `const` is Preferred for Objects

| Reason | Explanation |
|--------|-------------|
| **Prevents accidental reassignment** | You won't accidentally replace the entire object with a new one |
| **Reference stays stable** | Other code that holds this reference won't break because the object was swapped |
| **Signals intent** | Tells other developers: *"This object is meant to be this one"*, even though its properties can change |
| **Code safety** | Prevents bugs where you meant to update properties but accidentally reassigned the whole object |

### Quick Example

```javascript
const user = { name: "Alice", age: 25 };

// ✅ What you USUALLY want to do:
user.age = 26;              // Update property
user.email = "a@b.com";     // Add property
delete user.email;          // Remove property

// ❌ What you RARELY want to do:
user = { name: "Bob" };     // Replace entire object
```

If you use `let`, you *could* reassign `user` to a completely new object, which breaks any code that was holding the old reference.

### When to Use `let` for Objects

Only if you **intentionally** need to swap the object:

```javascript
let config = { env: "dev" };

// Later, replace the entire config
config = { env: "prod", apiKey: "xxx" };
```

### Summary

| | `const` | `let` |
|--|---------|-------|
| **Can mutate properties?** | ✅ Yes | ✅ Yes |
| **Can reassign variable?** | ❌ No | ✅ Yes |
| **Best for objects?** | ✅ Yes | ⚠️ Only if you plan to swap the object |

> **Rule of thumb**: Always use `const` by default. Switch to `let` only if you absolutely need to reassign the variable later.

---

Happy Learning!
