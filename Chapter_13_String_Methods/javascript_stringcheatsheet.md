# JavaScript String Methods Cheat Sheet

A quick reference guide to all built-in JavaScript string methods with one-liner examples.

---

## Property

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `length` | Returns the length of a string | `"Hello".length` | `5` |

---

## Searching & Checking

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `charAt(index)` | Returns character at specified index | `"Hello".charAt(1)` | `"e"` |
| `charCodeAt(index)` | Returns Unicode of character at index | `"A".charCodeAt(0)` | `65` |
| `at(index)` | Returns character at index (supports negatives) | `"Hello".at(-1)` | `"o"` |
| `indexOf(search)` | Returns first index of match, or `-1` | `"Hello".indexOf("l")` | `2` |
| `lastIndexOf(search)` | Returns last index of match, or `-1` | `"Hello".lastIndexOf("l")` | `3` |
| `search(regex)` | Returns index of regex match, or `-1` | `"Hello 123".search(/\\d/)` | `6` |
| `includes(search)` | Returns `true` if string contains substring | `"Hello".includes("ell")` | `true` |
| `startsWith(search)` | Returns `true` if string starts with substring | `"Hello".startsWith("He")` | `true` |
| `endsWith(search)` | Returns `true` if string ends with substring | `"Hello".endsWith("lo")` | `true` |
| `match(regex)` | Returns array of matches or `null` | `"Hello 123".match(/\\d+/g)` | `["123"]` |
| `matchAll(regex)` | Returns iterator of all matches | `[..."a1b2".matchAll(/\\d/g)]` | `["1","2"]` |

---

## Extracting & Slicing

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `slice(start, end)` | Extracts portion of string | `"Hello".slice(1, 4)` | `"ell"` |
| `substring(start, end)` | Similar to slice, no negative indices | `"Hello".substring(1, 4)` | `"ell"` |
| `substr(start, length)` | Extracts `length` chars from `start` | `"Hello".substr(1, 3)` | `"ell"` |
| `split(separator)` | Splits string into array | `"a,b,c".split(",")` | `["a","b","c"]` |

---

## Replacing & Modifying

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `replace(old, new)` | Replaces first match only | `"Hello".replace("l", "x")` | `"Hexlo"` |
| `replaceAll(old, new)` | Replaces all matches | `"Hello".replaceAll("l", "x")` | `"Hexxo"` |
| `replace(regex, fn)` | Replace using regex with function | `"a1b2".replace(/\\d/g, "*")` | `"a*b*"` |
| `toUpperCase()` | Converts to uppercase | `"hello".toUpperCase()` | `"HELLO"` |
| `toLowerCase()` | Converts to lowercase | `"HELLO".toLowerCase()` | `"hello"` |
| `trim()` | Removes whitespace from both ends | `"  hello  ".trim()` | `"hello"` |
| `trimStart()` | Removes whitespace from start | `"  hello".trimStart()` | `"hello"` |
| `trimEnd()` | Removes whitespace from end | `"hello  ".trimEnd()` | `"hello"` |
| `padStart(length, char)` | Pads from start to reach length | `"5".padStart(3, "0")` | `"005"` |
| `padEnd(length, char)` | Pads from end to reach length | `"5".padEnd(3, "0")` | `"500"` |
| `repeat(count)` | Repeats string `count` times | `"Ha".repeat(3)` | `"HaHaHa"` |
| `concat(str1, str2...)` | Joins two or more strings | `"Hello".concat(" ", "World")` | `"Hello World"` |

---

## Converting & Formatting

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `toString()` | Returns string representation | `(123).toString()` | `"123"` |
| `valueOf()` | Returns primitive value of string | `new String("hi").valueOf()` | `"hi"` |
| `localeCompare(str)` | Compares two strings in sort order | `"a".localeCompare("b")` | `-1` |
| `normalize()` | Returns Unicode normalized form | `"café".normalize()` | `"café"` |
| `toLocaleLowerCase()` | Locale-aware lowercase | `"İ".toLocaleLowerCase("tr")` | `"i"` |
| `toLocaleUpperCase()` | Locale-aware uppercase | `"i".toLocaleUpperCase("tr")` | `"İ"` |

---

## Template Literals (String Interpolation)

| Syntax | Description | Example | Output |
|--------|-------------|---------|--------|
| Backticks `` ` `` | Multi-line strings & interpolation | `` `Hello ${name}` `` | Dynamic value insertion |
| `\n` | New line | `"Line1\nLine2"` | Two lines |
| `\t` | Tab | `"A\tB"` | Tab separated |
| `\\` | Backslash | `"C:\\Users"` | `"C:\Users"` |
| `\'` | Single quote | `"It\'s ok"` | `"It's ok"` |
| `\"` | Double quote | `"Say \"Hi\""` | `"Say "Hi""` |

---

## Quick Comparison: `replace` vs `replaceAll`

| Method | `"hello world"` with `.replace("l", "x")` | Result |
|--------|---------------------------------------------|--------|
| `replace("l", "x")` | Replaces **first** match only | `"hexlo world"` |
| `replaceAll("l", "x")` | Replaces **all** matches | `"hexxo worxd"` |
| `replace(/l/g, "x")` | Replaces all with regex flag | `"hexxo worxd"` |

---

## Quick Comparison: `slice` vs `substring` vs `substr`

| Method | `"Hello World"` | Result | Notes |
|--------|-----------------|--------|-------|
| `.slice(0, 5)` | Extracts from 0 to 5 | `"Hello"` | End index exclusive |
| `.substring(0, 5)` | Extracts from 0 to 5 | `"Hello"` | No negative indices |
| `.substr(0, 5)` | Extracts 5 chars from 0 | `"Hello"` | Length-based, deprecated |
| `.slice(-5)` | Last 5 chars | `"World"` | Supports negatives |
| `.substring(-5)` | From 0 to 5 | `"Hello"` | Negative treated as 0 |

---

## Chaining Methods

```javascript
// You can chain string methods
"  Hello World  ".trim().toLowerCase().replace("world", "js"); // "hello js"
```

---

## String Immutability

> Strings in JavaScript are **immutable**. Methods return a new string, they don't modify the original.

```javascript
let str = "Hello";
str.toUpperCase(); // Returns "HELLO"
console.log(str);  // Still "Hello" (original unchanged)
```

---

Happy Coding!