
function checkOddNumber(num) {

    for (let i = 0; i <= num; i++) {

        if (i === num) {

            if (num % 2 !== 0) {
                return true;
            }
            else {
                return false;
            }

        }
    }

}

console.log(checkOddNumber(9));