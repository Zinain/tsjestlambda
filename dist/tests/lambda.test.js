"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lambda_1 = require("../src/lambda");
describe("Lambda handler", () => {
    test("returns Hello World when no name is provided", async () => {
        const event = {
            queryStringParameters: null
        };
        const response = await (0, lambda_1.handler)(event);
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body)).toEqual({
            message: "Hello World"
        });
    });
    test("returns personalised greeting", async () => {
        const event = {
            queryStringParameters: {
                name: "Ilzar"
            }
        };
        const response = await (0, lambda_1.handler)(event);
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body)).toEqual({
            message: "Hello Ilzar"
        });
    });
});
