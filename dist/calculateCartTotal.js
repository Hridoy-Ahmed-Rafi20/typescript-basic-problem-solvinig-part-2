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
const products2 = [
    { name: "keyboard", price: 100 },
    { name: "Mouse", price: 100 },
    { name: "USB Cable", price: 100 },
    { name: "USB Cable", price: 100 },
];
console.log(calculateCartTotal(products));
console.log(calculateCartTotal(products2));
//# sourceMappingURL=calculateCartTotal.js.map