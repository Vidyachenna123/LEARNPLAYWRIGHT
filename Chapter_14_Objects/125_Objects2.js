let student1 = { name: "Sree", age: 44 };
let student2 = { name: "Sree" };
let student3 = { name: "Sree", age: 44, phone: 342423213 };

let JSON_student4 = { "name": "Sree", "age": 44, "phone": 23232312 };

let a = { status: "pass" };
// console.log(a.status);
// console.log(a["status"]);

// let a1 = { status: "Pass" };
// console.log(a1.status);

let b = a;
b.status = "Fail";
console.log(a.status);
console.log(b.status);

if (b === a) {
    console.log("True");

} else {
    console.log("False");

}


