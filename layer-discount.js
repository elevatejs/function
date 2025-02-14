function layerDiscount(quantity) {
    const first100 = 100;
    const above100 = 90;
    const above200 = 70;
    if (quantity <= 100) {
        const first100Price = quantity * first100;
        return first100Price;
    }
    else if (quantity <= 200) {
        const first100price = 100 * first100;
        const remainQuantity = quantity - 100;
        const remainTotal = remainQuantity * above100;
        const totalPrice = first100price + remainTotal;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100;
        const above100Price = 100 * above100;
        const remainQuantity = quantity - 200;
        const remainTotal = remainQuantity * above200;
        const totalPrice = first100Price + above100Price + remainTotal;
        return totalPrice;
    }
}
const quantity = layerDiscount(300);
console.log(quantity);
