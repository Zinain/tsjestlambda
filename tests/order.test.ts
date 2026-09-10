import { calculateOrderTotal } from "../src/order";

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

        expect(calculateOrderTotal(products))
            .toBe(1100);
    });

});