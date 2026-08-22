"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateOrderTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return total;
};
console.log(calculateOrderTotal([
    { name: 'Burger', price: 250 },
    { name: 'Fries', price: 90 },
    { name: 'Soda', price: 60 },
]));
console.log(calculateOrderTotal([{ name: 'Pizza', price: 500 }]));
console.log(calculateOrderTotal([]));
//# sourceMappingURL=12.%20Restaurant%20Order%20Total.js.map