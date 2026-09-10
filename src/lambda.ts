import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";

export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

    const name =
        event.queryStringParameters?.name ?? "World";

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
