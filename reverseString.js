//Reverse a String

// function reverseString(str) {
//     const strArr = str.split('');
//     strArr.reverse();
//     return strArr.join('');
// }

/////////////////////////////////////////////////////

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

/////////////////////////////////////////////////////

// function reverseString(str) {
// let revString = '';
// for(let i = str.length - 1; i >= 0; i--) {
//     revString = str[i] + revString;
// }
// return revString;
// }

//////////////////////////////////////////////////////////

// function reverseString(str) {
// let revString = '';
// for(let i = 0; i <= str.length - 1; i++) {
//     revString =  str[i] + revString;
// }
// return revString;
// }


/////////////////////////////////////////////////////////////

//For of Loop

// function reverseString(str) {
// let revString = '';
// for(let char of str) {
//     revString = char + revString;
// }
// return revString;
// }


/////////////////////////////////////////////////////

// For Each method

// function reverseString(str) {
//     let revString = '';
//     str.split('').forEach(function(char) {
//         revString = char + revString;
//     })
//     return revString;
// }

// ES6

// function reverseString(str) {
//     let revString = '';
//     str.split('').forEach(char => revString = char + revString);
//     return revString;
// }

//////////////////////////////////////////////////////////

// Reduce Method

// function reverseString(str) {
//     return str.split('').reduce(function(revstring, char) {
//         return char + revstring;
//     }, '')
// }

// ES6

function reverseString(str) {
    return str.split('').reduce((revstring, char) => 
        char + revstring, '')
}