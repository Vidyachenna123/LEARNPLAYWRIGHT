const user = { name1: "John", age: 30 };

const { name1, age } = user;
console.log(name1);
console.log(age);

//Rename variable
const { name1: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);

//Deconstructing
//const { age } = user;

//Default values
const { country = "USA" } = user;
console.log(country);


const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        }
    }
};

const { user: { address: { city } } } = data;
console.log(data.user.address.city);





