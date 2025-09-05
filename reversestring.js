
function reverseString(str) {

    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {

        newString += str[i];  //newString = newString + str[i]

    }
    return newString;
}

const originalString = "Programming";
const reversedString = reverseString(originalString);
console.log(reversedString);