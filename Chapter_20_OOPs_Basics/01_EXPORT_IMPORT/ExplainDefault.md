# Understanding Default vs Non-Default (Named) Exports in JavaScript

This document explains the difference between **default exports** and **non-default (named) exports** by comparing the patterns found in `169_Utils.js` and `170_Logger.js` and their source modules.

---

## 1. Non-Default (Named) Exports

Used in: **`169_Utils.js`** importing from `utils.js` and `testutils.js`.

### How to Export (Source File)

Use the `export` keyword directly on variables, functions, or classes.

**`utils.js`**
```javascript
export let BASE_URL = "https://api.staging.com";

export function formatTestName(name) {
    return "TC_ + name.toUpperCase()";
}
```

**`testutils.js`**
```javascript
export let BASE_URL = "https://app.vwo.com";

export function formatUpperCaseString(name){
  return name.toUpperCase();
}
```

### How to Import (Consumer File)

Import specific names inside **curly braces `{}`**. You must use the exact name exported (unless you use `as` to alias it).

**`169_Utils.js`**
```javascript
import { BASE_URL as bul_util, formatTestName } from "../utils.js";
import { BASE_URL as bul_testtul, formatUpperCaseString } from "../testutils.js";

console.log(bul_util);
console.log(bul_testtul);
console.log(formatTestName("login"));
```

### Key Points: Named Exports
| Feature | Description |
|---------|-------------|
| Syntax | `export function myFunc() {}` |
| Import Syntax | `import { myFunc } from '...';` |
| Aliasing | `import { myFunc as mf } from '...';` |
| Multiple Exports | You can export **many** items from a single file. |
| Name Requirement | The importer must know the exact exported name (or alias it). |

---

## 2. Default Exports

Used in: **`170_Logger.js`** importing from `logger.js`.

### How to Export (Source File)

Use the `export default` keywords. A file can have **only one** default export.

**`logger.js`**
```javascript
export default function log(message) {
    console.log(" [LOG]  - default " + message);
}

export function log2(message) {
    console.log(" [LOGS] " + message);
}
```

> **Note:** `logger.js` also demonstrates a file can have **one default export** AND multiple named exports (`log2`) at the same time.

### How to Import (Consumer File)

Import **without** curly braces. You can assign **any name** you want to the imported default.

**`170_Logger.js`**
```javascript
import log from '../logger.js';

log("Starting the testcases");
```

You could also name it differently:
```javascript
import myCustomLogger from '../logger.js';
myCustomLogger("Starting the testcases");
```

### Key Points: Default Exports
| Feature | Description |
|---------|-------------|
| Syntax | `export default function myFunc() {}` |
| Import Syntax | `import myFunc from '...';` (no curly braces) |
| Aliasing | Built-in! You can name it anything when importing. |
| Count per File | Only **one** default export allowed per module. |
| Flexibility | Great when a module has a primary, single purpose. |

---

## 3. Side-by-Side Comparison

| Aspect | Non-Default (Named) Export | Default Export |
|--------|---------------------------|----------------|
| Export Keyword | `export` | `export default` |
| Import Syntax | `import { name } from '...'` | `import name from '...'` |
| Braces Required? | **Yes** `{}` | **No** |
| Import Name | Must match exported name (or use `as`) | Can be any name you choose |
| Exports per File | Unlimited | **One** per file |
| Typical Use Case | Utility libraries with multiple helpers | A single class/component/logger per file |

---

## 4. Summary

- Use **named exports** (`export { ... }`) when a file provides multiple utilities, constants, or functions (like `utils.js` and `testutils.js`).
- Use **default exports** (`export default ...`) when a file represents a single primary entity, such as a logger, a component, or a main class (like `logger.js`).
- You can **mix both** in the same file if needed, as shown in `logger.js` which exports `log` as default and `log2` as a named export.
