// Real QA scenario: end to end login for app.vwo.com

//openbrowser()
//GgoToLoginPage()
//enterCredentials()
//clickLogin()

function openBrowser(callback) {
    console.log("Opening the browser");
    setTimeout(function () {
        callback();
    }, 1000);

}

function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("step 2: Login page loaded");
        callback();
    }, 2000);
}

function enterCredentials(callback) {
    setTimeout(function () {
        console.log("step 3: Credentails entered");
        callback();
    }, 1000);
}


function clickLogin(callback) {
    setTimeout(function () {
        console.log("step 4: Login button clicked");
        callback();
    }, 1000);
}

//This is callback hell
openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test complete!");

            });
        });
    });
});