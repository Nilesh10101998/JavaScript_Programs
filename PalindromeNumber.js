
function palindromeNumber(num) {

    let originalNumber = num;
    let newNumber = 0;

    while (num > 0) {

        lastDigit = num % 10;
        newNumber = newNumber * 10 + lastDigit;
        num = Math.floor(num / 10);
    }

    return originalNumber === newNumber;
}

console.log(palindromeNumber(121));