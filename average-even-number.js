function evenAvg(numbers) {
    let evens = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            evens.push(number)
        }
    }
    let sum = 0;
    for (let even of evens) {
        sum = sum + even;
    }
    console.log("Total of the even numbers is =", sum);
    let evenLength = evens.length;
    let avg = sum / evenLength;
    return avg;
}
const numbers = [1, 2, 5, 6, 7, 8, 9, 10, 13];
const result = evenAvg(numbers);
console.log("Average of the even number is =", result);
