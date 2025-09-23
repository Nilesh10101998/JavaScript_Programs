
function duplicateNumber(arr) {

    let seen = new Set();
    let duplicates = new Set();

    for (let num of arr) {

        if (seen.has(num)) {
            duplicates.add(num);
        }
        else {
            seen.add(num);
        }
    }

    return Array.from(duplicates);
}

let arr = [1, 3, 5, 6, 5, 5, 6, 1];
console.log(duplicateNumber(arr));