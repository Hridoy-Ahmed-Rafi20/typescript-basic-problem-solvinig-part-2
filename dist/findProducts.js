"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findProducts = (products, category) => {
    const getProducts = products.filter((currentProduct) => {
        if (currentProduct.category === category) {
            return true;
        }
        else {
            return false;
        }
    });
    return getProducts;
};
const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" },
];
findProducts(products, "phone");
findProducts(products, "laptop");
findProducts(products, "samsung");
//# sourceMappingURL=findProducts.js.map