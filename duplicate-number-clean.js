// Duplicate number clean
function dupNum(numbers) {
    const singleNumber = [];
    for (let number of numbers) {
        if (singleNumber.includes(number) === false) {
            singleNumber.push(number);
        }
    }
    return singleNumber;

}

const numbers = [1, 2, 3, 4, 3, 6, 6, 4, 4, 5, 5, 4, 7, 8, 7];
const output = dupNum(numbers);
console.log(output);
