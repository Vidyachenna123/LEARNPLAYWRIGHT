class Credentials {
    #apiKey; // private variables are not allowed to use outside
    user;

    constructor(user, key) {
        this.user = user;
        this.#apiKey = key;

    }
    pramodgetAuthHeader() {
        return " Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "scret_key_1234");
console.log(cred.user);


const token = cred.pramodgetAuthHeader();
console.log(token);
