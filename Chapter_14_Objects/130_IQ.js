const user = {
    name: "John",
    age: 30,
    email: "John@gmail.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]);

//Dynamic property access
const key = "age";
console.log(user[key]);

//Adding/modifying prperties
user.city = "NYC";
user.age = 31;
console.log(user);


let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

