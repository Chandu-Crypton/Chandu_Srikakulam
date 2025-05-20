function generateConditionalOddSeries(a) {

    if (Number.isNaN(a) || a <= 0) {
        return "Input must be positive number"
    }

    const numberOfOddsToGenerate = (a % 2 !== 0) ? a : a - 1
    const series = []
    for (let n = 1; n <= numberOfOddsToGenerate; n++) {
        const oddNum = 2 * n - 1
        series.push(oddNum)
    }

    return series.join(", ")
}

console.log(`Input a = 1, Output: ${generateConditionalOddSeries(1)}`);
console.log(`Input a = 2, Output: ${generateConditionalOddSeries(2)}`);
console.log(`Input a = 3, Output: ${generateConditionalOddSeries(3)}`);
console.log(`Input a = 4, Output: ${generateConditionalOddSeries(4)}`);
console.log(`Input a = 5, Output: ${generateConditionalOddSeries(5)}`);
console.log(`Input a = 6, Output: ${generateConditionalOddSeries(6)}`);