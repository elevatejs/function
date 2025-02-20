const products = [
    { id: 1, name: 'Xiaomi Note 11 Phone', Price: 15000 },
    { id: 2, name: 'Xiaomi Laptop', Price: 35000 },
    { id: 3, name: 'Samsung 18+ Phone', Price: 25000 },
    { id: 4, name: 'Samsung Laptop', Price: 55000 },
    { id: 5, name: 'One+ Phone', Price: 35000 },
    { id: 6, name: 'One+ laptop', Price: 15000 },
    { id: 7, name: 'iPhone', Price: 80000 },
    { id: 8, name: 'Mac laptop', Price: 105000 },
    { id: 9, name: 'Google 22va Phone', Price: 37000 },
    { id: 10, name: 'Google Laptop', Price: 90000 },

];

function matchedProduct(products, search) {
    const matched = [];
    for (let product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProduct(products, 'Laptop');
console.log(result);
