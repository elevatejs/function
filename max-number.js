function maxNumber(numbers) {
    let max = numbers[0];
    for (let num of numbers) {
        if (num > max) {
            max = num
        }
    }
    return max;
}
const numbers = [10, 20, 30, 55, 66, 1, 9, 68, 200];
const result = maxNumber(numbers);
console.log(result);
