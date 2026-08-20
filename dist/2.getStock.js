"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStockStatus = (stock) => {
    if (stock === 0) {
        return 'Out of stock';
    }
    else if (stock > 1 && stock <= 5) {
        return 'Almost out of stock';
    }
    else if (stock > 6 && stock <= 20) {
        return 'Available';
    }
    return 'In stock';
};
console.log(getStockStatus(0)); // returns 'Out of stock'
console.log(getStockStatus(3)); // returns 'Almost out of stock'
console.log(getStockStatus(10)); // returns 'Available'
console.log(getStockStatus(25)); // returns 'In stock'
//# sourceMappingURL=2.getStock.js.map