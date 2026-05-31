let results = ["Pass", "Fail", "Pass", "Error", "Fail"];

results.indexOf("Fail");
results.indexOf("Skip");
results.lastIndexOf("Fail");

results.includes("error"); //returns boolean
results.includes("skip");

//Find - returns first matching element
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);
console.log(r);
nums.findIndex(n => n > 20);

nums.findLast(n => n > 20);
nums.findLastIndex(n => n > 20);
