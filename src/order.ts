interface Product {
    name: string;
    price: number;
    quantity: number;
}

export function calculateOrderTotal(
    products: Product[]
): number {

    return products.reduce(
        (total, product) =>
            total + product.price * product.quantity,
        0
    );
}