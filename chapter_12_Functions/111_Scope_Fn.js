//Scope in Functions

let env = "Staging";

function setupConfig() {
    let timeout = 3000;
    console.log(env);
    console.log(timeout);
}

setupConfig();
console.log(env);
console.log(timeout);
