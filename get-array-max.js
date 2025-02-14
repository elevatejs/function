function getCheapestPhone(phones) {
    let addPhone = phones[0];
    for (let phone of phones) {
        if (phone.price > addPhone.price) {
            addPhone = phone;
        }
    }
    return addPhone;
}
const phones = [
    { name: 'S22 Ultra', brand: 'Samsung', price: 48000, color: 'Blue', camera: '12MP' },
    { name: 'Note 11 pro', brand: 'Xiaomi', price: 18000, color: 'Black', camera: '16MP' },
    { name: 'Iphone 12 pro', brand: 'Apple', price: 100000, color: 'Silver', camera: '48MP' },
    { name: 'F 12', brand: 'Google', price: 48000, color: 'Blue', camera: '12MP' }
]
const result = getCheapestPhone(phones);
console.log(result);
