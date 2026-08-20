"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTicketPrice = (age) => {
    let price = 0;
    if (age < 5) {
        price = 0;
    }
    else if (age >= 5 && age <= 12) {
        price = 100;
    }
    else if (age >= 13 && age <= 59) {
        price = 200;
    }
    else {
        price = 120;
    }
    return price;
};
console.log(getTicketPrice(3));
// 0
console.log(getTicketPrice(10));
// 100
console.log(getTicketPrice(25));
// 200
console.log(getTicketPrice(65));
// 120
//# sourceMappingURL=getTicketPrice.js.map