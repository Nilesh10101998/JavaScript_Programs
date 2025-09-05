
function reverseName(str) {

    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {

        newString += str[i];

    }

    return newString;
}

const originalString = "Programming";
const reversedString = reverseName(originalString);
console.log(reversedString);