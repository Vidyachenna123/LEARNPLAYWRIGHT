//Immediately invoked function
(function () {
    console.log("Hi");
})();

(function () {
    console.log("staging");
})();

(() => {
    console.log("Setup complete");
})();