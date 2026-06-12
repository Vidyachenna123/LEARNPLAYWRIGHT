let config = {};

config.browser = "Chrome";
config.timeout = 3000;
config.testname = "login test";
console.log(config);

// if(config.browser === "chrome"){
//     console.log("I will execute my TC");

// }

delete config.browser;
console.log(config);

if (config.browser === "chrome") {
    console.log("I will execute my TC");

}

let config2 = {
    browser = "Chrome",
    timeout = 3000,
    testname = "login test"
};
