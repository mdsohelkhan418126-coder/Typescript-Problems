"use strict";
// Bank widow
Object.defineProperty(exports, "__esModule", { value: true });
const prossesTranestion = (balance, trantion) => {
    if (trantion.type === 'deposit') {
        return balance + trantion.amount;
    }
    if (trantion.type === 'withdraw') {
        if (trantion.amount > balance) {
            return 'Infuction Balance';
        }
        return balance - trantion.amount;
    }
    throw new Error('Invalid transaction type');
};
// console.log(prossesTranestion(5000, { type: 'deposit', amount: 2000 }));
console.log(prossesTranestion(5000, { type: 'withdraw', amount: 2000 }));
console.log(prossesTranestion(5000, { type: 'withdraw', amount: 7000 }));
//# sourceMappingURL=9.BankWidow.js.map