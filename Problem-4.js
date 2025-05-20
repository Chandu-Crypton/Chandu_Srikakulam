function countMultiples(numbers) {

    const result = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
    }
    const divisors = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let num of numbers) {
        if (typeof num !== "number" || !Number.isInteger(num)) {
            continue;
        }

        for (divisor of divisors) {
            if (num % divisor === 0) {
                result[divisor]++
            }
        }
    }

    return result

}

const input1 = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const output1 = countMultiples(input1);
console.log(`Input: [${input1}]\nOutput: ${JSON.stringify(output1)}`);
