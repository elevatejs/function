function shoppingCart(products) {
    let total = 0;
    for (let product of products) {
        const totalCost = product.price * product.quantity;
        total = total + totalCost;
    }
    return total;
}


const products = [
    { name: 'Shirt', price: 500, quantity: 3 },
    { name: 'T-Shirt', price: 300, quantity: 2 },
    { name: 'Shoe', price: 800, quantity: 1 },
    { name: 'Pant', price: 400, quantity: 2 },
    { name: 'Foods', price: 50, quantity: 10 },
]
const result = shoppingCart(products);
console.log(result);
