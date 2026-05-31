let browser = ['Chrome', 'Firefox', 'Safari', 'opera', 'edge'];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

let removed = browser.shift();
console.log(browser);
console.log(removed);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "Opera") {
        console.log("Opera is removed from the selenium");
    }
}