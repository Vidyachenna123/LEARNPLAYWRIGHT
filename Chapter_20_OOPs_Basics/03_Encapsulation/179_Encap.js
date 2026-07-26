class BankAccount{
    #balance = 0;

    deposit(amount) {
        if(amount > 0){
            this.#balance += amount;
        }
    }

    getBalance(){
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(100);
account.getBalance();

