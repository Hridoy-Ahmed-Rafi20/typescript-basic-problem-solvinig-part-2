"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCartTotal = (products) => {
    const getTotal = products.reduce((acc, currentProduct) => acc + currentProduct.price, 0);
    return getTotal;
};
const products = [
    { name: "keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 },
    { name: "USB Cable", price: 400 },
];
calculateCartTotal(products);
//# sourceMappingURL=calculateCartTotal.js.map