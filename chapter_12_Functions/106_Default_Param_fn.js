function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} upto ${maxRetries} times, ${delay} apart`);
}

retry("Login Test");
retry("Registration Test", 5, 2000);