"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../src/order");
describe("calculateOrderTotal", () => {
    test("calculates total correctly", () => {
        const products = [
            {
                name: "Laptop",
                price: 1000,
                quantity: 1
            },
            {
                name: "Mouse",
                price: 50,
                quantity: 2
            }
        ];
        expect((0, order_1.calculateOrderTotal)(products))
            .toBe(1100);
    });
});
