
function maxNumArray(arr) {

    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {

            max = arr[i];
        }
    }

    return max;
}

const arr = [1, 6, 8, 10, 25, 98, 30];
const findMaxNumber = maxNumArray(arr);
console.log(findMaxNumber);