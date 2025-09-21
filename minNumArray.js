
//1]Passing array as the argument (function is taking the parameter) => flexible approach

function minNumArray(arr) {

    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < min) {

            min = arr[i];
        }

    }

    return min;

}

console.log(minNumArray([21, 51, 89, 20, 48, 1, 0]));


//2]Passing array inside the function (function is not taking any parameter)

function minNumArray() {

    let arr = [21, 51, 89, 20, 48, 1, 0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < min) {

            min = arr[i];
        }

    }

    return min;

}

console.log(minNumArray());


//3]Combined approach (passing default array as well passing array while calling the function)

function minNumArray(arr = [21, 51, 89, 20, 48, 1, 0]) {   //passing the default array

    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < min) {

            min = arr[i];
        }

    }

    return min;

}

// console.log(minNumArray());
console.log(minNumArray([2, 56, 85, 98, 7])); //passing the array as the argument