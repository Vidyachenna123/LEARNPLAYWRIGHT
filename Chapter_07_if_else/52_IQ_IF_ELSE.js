if ("hello") console.log("String is truthy"); // Hello is truthy
if (42) console.log("Number is truthy");
if ({}) console.log("Empty object is truthy");
if ([]) console.log("Empty array is truthy");

// if ("") console.log("Wont print");
// if (null) console.log("Wont print");
// if (undefined) console.log("Wont print");
// if (Nan) console.log("Wont print");
// if (0) console.log("Wont print");


let name = undefined;
if (name) {
    console.log("Hi");
} else {
    console.log("Bye");
}