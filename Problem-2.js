function generateOddSeries(a) {

    if (!Number.isNaN(a) || a <= 0) {
        return "Input must be positive integer"
    }

    const series = []
    for (let n = 1; n <= a; n++) {
        const oddNum = 2 * n - 1
        series.push(oddNum)
    }

    return series.join(", ")
}

console.log(`Input a = 1, Output: ${generateOddSeries(1)}`);
console.log(`Input a = 2, Output: ${generateOddSeries(2)}`);
console.log(`Input a = 3, Output: ${generateOddSeries(3)}`);
console.log(`Input a = 4, Output: ${generateOddSeries(4)}`);
console.log(`Input a = 5, Output: ${generateOddSeries(5)}`); 