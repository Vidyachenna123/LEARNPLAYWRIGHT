interface APIResponse {
    readonly statusCode: number;
    body: string;
    headers?: object;
    responseTime?: number;
}

//readonly - cannot modify

//? - optional

let response: APIResponse = {
    statusCode: 200,
    body: '{"user" : "admin"}'

};

console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.headers);

//response.statusCode = 404;
response.body = "sfrd";







