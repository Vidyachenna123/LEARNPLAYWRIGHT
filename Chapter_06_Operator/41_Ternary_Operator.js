
let raj_age = 19;
let raj_go_goa = raj_age > 19 ? "Goa trip on" : "No Goa";
console.log(raj_go_goa);



let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "True" : "False";
console.log(testResult);


let environment = "Staging";
let baseUrl = environment === "Prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);


let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launch browser in:", browserMode, "mode");


let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA breach";
console.log(`Response: ${responseTime}ms - ${slaStatus}`);


let condition = true;
let isSKmale = condition ? "True" : "False";
console.log(isSKmale);


//Nested Ternary

//Multiple conditions

let age = 26;
let is_sree_go = age > 26 ? "she will go" : "She will not go";
console.log(is_sree_go);


let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "No Drink") : "No Goa";
console.log(is_pramod_d);


let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client error" : "Server error";
console.log(`Status ${statusCode}: ${category}`);



let temp = 35;
let feel = (temp >= 40) ? "Very hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);
