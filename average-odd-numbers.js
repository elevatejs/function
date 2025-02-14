function oddAvg(numbers) {
    let odds = [];
    let sum = 0;
    for (let number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }
    for (let odd of odds) {
        sum += odd;
    }
    console.log("This is total of odds number =", sum);
    const oddsLength = odds.length;
    const avg = sum / oddsLength;
    return avg;
}
const numbers = [1, 2, 5, 6, 7, 8, 9, 10, 13];
const result = oddAvg(numbers);
console.log("This is average of odds number =", result);
