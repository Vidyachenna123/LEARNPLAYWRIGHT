interface APIResponse {
    body: string;
    headers?: object;
    responseTime: number;
}

let response: APIResponse = {
    body: 'Hi',
    responseTime: 400
};

let response2: APIResponse = {
    body: 'HI',
    headers: {},
    responseTime: 400
};

