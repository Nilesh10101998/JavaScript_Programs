
function duplicateChar(str) {

    let seen = new Set();
    let duplicates = new Set();

    for (let char of str) {

        if (seen.has(char)) {
            duplicates.add(char);
        }
        else {
            seen.add(char);
        }
    }

    return Array.from(duplicates);
}

let str = "Nileshheil"
console.log(duplicateChar(str));