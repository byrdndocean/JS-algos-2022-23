// ALGORITHM
// LETTER CHANGES
// CHANGE EVERY LETTER OF THE STRING TO THE ONE THAT FOLLOWS IT AND CAPITALIZE THE VOWELS
// Basically shifting the alphabet

function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        if (char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    })

    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase())
    return newStr;
}

const output = letterChanges('Hello Therez');

console.log(output);