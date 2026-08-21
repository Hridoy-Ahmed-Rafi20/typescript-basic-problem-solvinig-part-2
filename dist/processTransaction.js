"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processTransaction = (balance, transaction) => {
    if (transaction.type === "deposit") {
        return (balance += transaction.amount);
    }
    else if (balance <= transaction.amount) {
        return balance;
    }
    else {
        return (balance -= transaction.amount);
    }
};
processTransaction(5000, { type: "deposit", amount: 2000 });
processTransaction(5000, { type: "withdraw", amount: 2000 });
processTransaction(5000, { type: "withdraw", amount: 7000 });
processTransaction(7000, { type: "withdraw", amount: 1000 });
//# sourceMappingURL=processTransaction.js.map