class BaseTest {
    setup(): void {
        console.log("[BASE] Open browser");
    }
    teardown(): void {
        console.log("[BASE] Close browser");

    }
}

class LoginTest extends BaseTest {
    override setup(): void {
        console.log("[LoginTest] Open browser");
        console.log("[LoginTest] Maximize");
    }
}

class APITest extends BaseTest {

    override setup(): void {
        console.log("[APITEST] No Browser");

    }
}

let test = new LoginTest();
test.setup();

let test1 = new APITest();
test1.setup();
