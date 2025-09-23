
function isAnagram(str1, str2) {

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    let array1 = Array.from(str1);
    let array2 = Array.from(str2);

    array1.sort();
    array2.sort();

    for (let i = 0; i < array1.length; i++) {

        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram("heart", "earth"));