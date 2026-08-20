"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStockStatus = (stock) => {
    let msg = "";
    if (stock === 0) {
        msg = "Out of Stock";
    }
    else if (stock >= 1 && stock <= 5) {
        msg = "Almost Sold Out";
    }
    else if (stock >= 6 && stock <= 20) {
        msg = "Available";
    }
    else {
        msg = "In Stock";
    }
    return msg;
};
// console.log(getStockStatus(0));
// // "Out of Stock"
// console.log(getStockStatus(3));
// // "Almost Sold Out"
// console.log(getStockStatus(12));
// // "Available"
// console.log(getStockStatus(50));
// // "In Stock"
// boundary values to double-check:
console.log(getStockStatus(5));
console.log(getStockStatus(6));
console.log(getStockStatus(20));
console.log(getStockStatus(21));
//# sourceMappingURL=getStockStatus.js.map