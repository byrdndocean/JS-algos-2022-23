// CAPITALIZE LETTERS
// RETURN A STRING WITH THE FIRST LETTER OF EVERY WORD CAPITALIZED

// function capitalizedLetters(str) {
//     const strArr = str.toLowerCase().split(' ');

//     for(let i = 0; i < strArr.length; i++) {
//         strArr[i] = strArr[i].substring(0, 1).toUpperCase() + 
//         strArr[i].substring(1);
//     }

//         return strArr.join(' ');
// }


// const output = capitalizedLetters('i love javascript');

// console.log(output);


//////////////////////////////////////////////////////////////////////

// MAP METHOD

// function capitalizedLetters(str) {
//     return str 
//         .toLowerCase()
//         .split(' ')
//         .map(word => word[0].toUpperCase() + word.substr(1))
//         .join(' ');
// }

// const output = capitalizedLetters('i love javascript');

// console.log(output);

////////////////////////////////////////////////////////////

// REGULAR EXPRESSIONS

function capitalizedLetters(str) {
    return str.replace(/\b[a-z]/gi, function(char) {
        return char.toUpperCase();
    })
}

const output = capitalizedLetters('i love javascript');

console.log(output);