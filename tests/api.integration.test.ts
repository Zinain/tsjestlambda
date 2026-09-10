const API_BASE_URL = process.env.API_URL ?? "http://127.0.0.1:3000";

describe("API Gateway integration", () => {

    test("GET /hello returns greeting", async () => {

        // if (!API_BASE_URL) {
        //     throw new Error(
        //         "API_BASE_URL environment variable is missing"
        //     );
        // }

        const response = await fetch(
            `${API_BASE_URL}/hello?name=Ilzar`
        );

        expect(response.status).toBe(200);

        const body = await response.json();

        expect(body).toEqual({
            message: "Hello Ilzar"
        });
    });

});