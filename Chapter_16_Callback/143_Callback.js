function print() {
    console.log("Normal fn");
}

function placeOrder(Clipboarditem, callback) {
    console.log("Hi, Your order is placed");
    callback();
}

//first way
placeOrder("pizza", print);

//second way Annonymus
placeOrder("burger", function () {
    console.log("Anonymus Fn, I am also a function without name");
});

//Third way - Arrow Fn
placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function without name!");
});