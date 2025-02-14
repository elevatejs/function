function minNum(numbers) {
    let min = numbers[0];
    for (let num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const numbers = [10, 20, 30, 55, 66, 1, 9, 68, 200];
const result = minNum(numbers);
console.log(result);
