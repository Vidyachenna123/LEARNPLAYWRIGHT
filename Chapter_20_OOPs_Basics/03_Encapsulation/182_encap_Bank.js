class ICICI {
    #balance;

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        }
        else {
            console.log("Not allowed");

        }
    }
}
let sree = new ICICI("Sreee", 1000);
console.log(sree.getBalance());
sree.setBalance(1000000, false);
console.log(sree.getBalance());

let sree_father = new ICICI("Sreev", 2000);
console.log(sree_father.getBalance());
sree_father.setBalance(500000, true);
console.log(sree_father.getBalance());


