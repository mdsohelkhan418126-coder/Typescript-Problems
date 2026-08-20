"use strict";
// searchProduct
Object.defineProperty(exports, "__esModule", { value: true });
const findProduct = (products, catagray) => {
    const catagrayProducts = products.filter((products) => products.catagray === catagray);
    return catagrayProducts;
};
const product = [
    {
        name: 'macbon',
        price: 5000,
        catagray: 'laptop',
    },
    {
        name: 'endice',
        price: 5000,
        catagray: 'laptop',
    },
    {
        name: 'mobile',
        price: 5000,
        catagray: 'iphon',
    },
];
console.log(findProduct(product, 'laptop'));
//# sourceMappingURL=7.SearchProduct.js.map