function isLucky(number) {
    return number.toString().split('').every(char => char === '4' || char === '7');
}

function findLuckyNumbers(A, B) {
    let luckyNumbers = [];
    for (let i = A; i <= B; i++) {
        if (isLucky(i)) {
            luckyNumbers.push(i);
        }
    }
    return luckyNumbers.length > 0 ? luckyNumbers.join(' ') : '-1';
}

// Example usage:
const A = 8;
const B = 15;
console.log(findLuckyNumbers(A, B));
