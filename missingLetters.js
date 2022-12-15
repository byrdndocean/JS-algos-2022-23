// MISSING LETTERS
// Find the missing letter in the passed letter range and return it.  If all letters are present, return undefined

// So if we pass in missingLetters('abce') == 'd'
// we get back 'd' because it's the missing letter
// If we pass in the entire alphabet without any letters missing, then we get back undefined

function missingLetters(str) {
    let compare = str.charCodeAt(0);
    let missing;

    str.split('').map((char, i) => {
        if(str.charCodeAt(i) == compare) {
            ++compare
        } else {
            missing = String.fromCharCode(compare);
        }
    })

    return missing
}

console.log(missingLetters('abce'));