
function charOccurance(str) {

    let counts = {};

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (char >= 'a' && char <= 'z') {

            if (counts[char]) {
                counts[char]++
            }
            else {
                counts[char] = 1;
            }
        }

    }

    return counts;
}

console.log(charOccurance("Tuesday"));