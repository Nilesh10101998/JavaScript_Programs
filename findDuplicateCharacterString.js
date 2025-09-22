
function findDuplicateCharacters(str) {

    let seen = {};
    let duplicates = [];

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (char >= 'a' && char <= 'z') {

            if (seen[char]) {

                if (!duplicates.includes(char)) {
                    duplicates.push(char);
                }

            } else {
                seen[char] = true;
            }
        }
    }

    return duplicates;

}

console.log(findDuplicateCharacters("Crickettttt"));