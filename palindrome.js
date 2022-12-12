// validate a palindrome
// Return true if palindrome and false if not

function isPalindrome(str) {
    const revString = str.split('').reverse().join('');

    return revString === str;
}

const output = isPalindrome('racecar')

console.log(output);