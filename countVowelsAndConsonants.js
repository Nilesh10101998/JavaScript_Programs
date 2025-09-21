
function countVowelsAndConsonants(str) {

    let vowels = 0;
    let consonants = 0;

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (char >= "a" && char <= "z") {

            if (char === 'a' || char === 'i' || char === 'e' || char === 'o' || char === 'u') {
                vowels++;
            }
            else {
                consonants++;
            }

        }

    }
    
    console.log("Vowels: " + vowels);
    console.log("Consonants: " + consonants);

}

countVowelsAndConsonants("Hello World");