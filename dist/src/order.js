"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateOrderTotal = calculateOrderTotal;
function calculateOrderTotal(products) {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
}
