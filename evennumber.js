
function evenNumber(num) {

    for (let i = 0; i <= num; i++) {

        if (i === num) {

            if (i % 2 === 0) {

                return true;
            }
            else {
                return false;
            }
        }
    }

}

console.log(evenNumber(9));