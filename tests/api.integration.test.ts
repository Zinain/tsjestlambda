const API_BASE_URL = process.env.API_BASE_URL ?? "http://127.0.0.1:3000";

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

    test("POST /order calculates order total", async () => {

        const response = await fetch(
            `${API_BASE_URL}/order`,
        {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            products: [
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
            ]
        })
        }
    );

        expect(response.status).toBe(200);

        const body = await response.json();

        expect(body).toEqual({
            total: 1100
        });
    });

        test("POST /order returns 400 when body is invalid", async () => {
        
        const response = await fetch(
        `${API_BASE_URL}/order`,
        {
        method: "POST",
        
        headers: {
            "Content-Type": "application/json"
        },
    
        body: JSON.stringify({})
        }
    );
    
        expect(response.status).toBe(400);
    
        const body = await response.json();
    
        expect(body).toEqual({
            error: "products must be an array"
        });
    });

});