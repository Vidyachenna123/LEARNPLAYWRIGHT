enum HTTPMethod {
    Geto = "GET",
    Posto = "POST",
    Puto = "PUT",
    Deleto = "DELETE"
}

function sendRequest(method: HTTPMethod, endpoint: string): void {
    console.log(method + " " + endpoint + " -> 200 OK");

}
sendRequest(HTTPMethod.Geto, "/api/users");
sendRequest(HTTPMethod.Posto, "/api/users");
sendRequest(HTTPMethod.Deleto, "/api/users/1");