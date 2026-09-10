import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult
} from "aws-lambda";

import { calculateOrderTotal } from "./order";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

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

    const total = calculateOrderTotal(data.products);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        total
      })
    };

  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Invalid JSON"
      })
    };
  }
};