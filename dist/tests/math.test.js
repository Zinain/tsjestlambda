"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../src/math");
describe("Math functions", () => {
    test("adds two numbers", () => {
        expect((0, math_1.add)(2, 3)).toBe(5);
    });
    test("subtracts two numbers", () => {
        expect((0, math_1.subtract)(10, 4)).toBe(6);
    });
    test("multiplies two numbers", () => {
        expect((0, math_1.multiply)(3, 4)).toBe(12);
    });
    test("divides two numbers", () => {
        expect((0, math_1.divide)(10, 2)).toBe(5);
    });
    test("throws error when dividing by zero", () => {
        expect(() => (0, math_1.divide)(10, 0))
            .toThrow("Cannot divide by zero");
    });
});
