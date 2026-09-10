import { handler } from "../src/lambda";
import { APIGatewayProxyEvent } from "aws-lambda";

describe("Lambda handler", () => {

    test("returns Hello World when no name is provided", async () => {

        const event = {
            queryStringParameters: null
        } as APIGatewayProxyEvent;

        const response = await handler(event);

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
        } as unknown as APIGatewayProxyEvent;

        const response = await handler(event);

        expect(response.statusCode).toBe(200);

        expect(JSON.parse(response.body)).toEqual({
            message: "Hello Ilzar"
        });
    });

});