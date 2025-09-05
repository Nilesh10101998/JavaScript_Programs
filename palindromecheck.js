function isPalindrome(str) {
  let reversed = "";

  // build reversed string
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  // check if original and reversed are same
  return str === reversed;
}

// Example usage
console.log(isPalindrome("madam"));    // true
console.log(isPalindrome("hello"));    // false
