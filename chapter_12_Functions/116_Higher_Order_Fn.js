//Higher-Order function
//A function that takes a function as argument or returns a function

function runWithLogin(testFn, testName) {
    let result = testFn();
    return result;
}

function loginTest() {
    return "Pass";
}

function loginTestFailed() {
    return "fail";
}

runWithLogin(loginTest, "Login Test");
runWithLogin(loginTestFailed, "Dashboard Failed Test");
