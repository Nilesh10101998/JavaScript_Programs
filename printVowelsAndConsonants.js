
function printVowelsAndConsonants(str) {

    let vowels = "";
    let consonants = "";

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (char >= "a" && char <= "z") {

            if (char === 'a' || char === 'i' || char === 'e' || char === 'o' || char === 'u') {

                vowels += char;
            } else {

                consonants += char;

            }

        }

    }

    console.log("Vowels " + vowels);
    console.log("Cosonants " + consonants);


696}

printVowelsAndConsonants("ILoveYou");