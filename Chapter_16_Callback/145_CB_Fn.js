function cafe(item, callWhenTableisReady){
    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    console.log(item);
    
    callWhenTableisReady();
}

function callWhenTableisReady(){
    console.log("Calling 8779799980");
    
}

cafe("Burger", callWhenTableisReady);

cafe("pizza", function(){
    console.log("Calling 887879989");
    
})

cafe("Momos", () => {
    console.log("Calling 8768688");
});
