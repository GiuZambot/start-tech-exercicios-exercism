export class BankAccount {
    constructor() {
        this.acIsOpen = false;
    }

    open() {
        if (this.acIsOpen) throw new ValueError();
        this.acIsOpen = true;
        this.acBalance = 0;
    }

    close() {
        if (!this.acIsOpen) throw new ValueError();
        this.acIsOpen = false;
        this.acBalance = 0;
    }

    deposit(money) {
        if (!this.acIsOpen || money < 0) throw new ValueError();
        this.acBalance += money;
    }

    withdraw(money) {
        if (!this.acIsOpen || this.acBalance < money || money < 0) throw new ValueError();
        this.acBalance -= money;
    }

    get balance() {
        if (!this.acIsOpen) throw new ValueError();
        return this.acBalance;
    }
}

export class ValueError extends Error {
    constructor() {
        super('Bank account error');
    }
}