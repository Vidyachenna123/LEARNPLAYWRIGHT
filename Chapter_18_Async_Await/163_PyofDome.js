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


async function runTheE2E() {
    let msg1 = await openBrowser();
    console.log("Step1:", msg1);
    let msg2 = await goToLogin();
    console.log("Step1:", msg2);
    let msg3 = await enterCredentials();
    console.log("Step1:", msg3);
    let msg4 = await clickLogin();
    console.log("Step1:", msg4);
}
runTheE2E();
