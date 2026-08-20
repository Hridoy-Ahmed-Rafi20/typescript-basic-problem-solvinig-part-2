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
getStockStatus(0);
// "Out of Stock"
getStockStatus(3);
// "Almost Sold Out"
getStockStatus(12);
// "Available"
getStockStatus(50);
// "In Stock"
// boundary values to double-check:
getStockStatus(5);
getStockStatus(6);
getStockStatus(20);
getStockStatus(21);
//# sourceMappingURL=getStockStatus.js.map