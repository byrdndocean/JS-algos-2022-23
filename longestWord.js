// // LONGEST WORD
// // RETURN THE LONGEST WORD OF A STRING
// // If more than 1 longest word, put into an array

// function longestWord(sen) {
//     // Create filtered array
//     const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)

//     // Sort by length
//     const sorted = wordArr.sort(function(a, b) {
//         return b.length - a.length
//     })

//     // If multiple words, put into array 
//     const longestWordArr = sorted.filter(function(word) {
//         return word.length === sorted[0].length;
//     })

//     // Check if more than 1 array val
//     if (longestWordArr.length === 1) {
//         // Return the word
//         return longestWordArr[0];
//     } else {
//         return longestWordArr;
//     }
// }

// const output = longestWord('Helloooo there, my name is Drez');

// console.log(output);


//////////////////////////////////////////////////////////////////

// ES6


function longestWord(sen) {
    // Create filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)

    // Sort by length
    const sorted = wordArr.sort((a, b) => b.length - a.length)

    // If multiple words, put into array 
    const longestWordArr = sorted.filter((word) => word.length === sorted[0].length)

    // Check if more than 1 array val
    if (longestWordArr.length === 1) {
        // Return the word
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
}

const output = longestWord('Hello there, my name is Drez');

console.log(output);