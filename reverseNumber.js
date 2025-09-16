
function reverseNumber(num) {

    let newNumber = 0;

    while (num > 0) {

        let lastDigit = num % 10;
        newNumber = newNumber * 10 + lastDigit;
        num = Math.floor(num / 10);

    }

    return newNumber;
}

const originalNumber = 12345;
const reversedNumber = reverseNumber(originalNumber);
console.log(reversedNumber);