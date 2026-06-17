function openBrowser() {
    return new Promise(function (resolve) {
        //Code to open te browser
        resolve("Open the browser");
    });
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    })
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    })
}

openBrowser().then(function (msg) {
    console.log("Step 1", msg);
    return goToLogin();
}).then(function (msg) {
    console.log("Step 2 - Open Browser");
    return enterCredentials();
}).then(function (msg) {
    console.log("Step 3", msg);
    return clickLogin();
}).then(function (msg) {
    console.log("Step 4", msg);
    return goToLogin();
}).catch(function (error) {
    console.log("Error:", error);
}).finally(function () {
    console.log("Done execution");
});
