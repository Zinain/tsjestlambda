"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const order_1 = require("./order");
const handler = async (event) => {
    if (!event.body) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: "Request body is required"
            })
        };
    }
    try {
        const data = JSON.parse(event.body);
        if (!Array.isArray(data.products)) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: "products must be an array"
                })
            };
        }
        const total = (0, order_1.calculateOrderTotal)(data.products);
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                total
            })
        };
    }
    catch {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: "Invalid JSON"
            })
        };
    }
};
exports.handler = handler;
