"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
    const name = event.queryStringParameters?.name ?? "World";
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: `Hello ${name}`
        })
    };
};
exports.handler = handler;
