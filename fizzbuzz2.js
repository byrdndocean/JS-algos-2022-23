// FIZZBUZZ
// WRITE A PROGRAM THAT PRINTS ALL THE NUMBERS FROM 1 TO 100. 
// FOR MULTIPLES OF 3, INSTEAD OF THE NUMBER, PRINT 'FIZZ', 
// FOR MULTIPLES OF 5 PRINT 'BUZZ'
// FOR MULTIPLES OF 3 AND 5 PRINT FIZZBUZZ

// function fizzbuzz() {
//     for(let i = 1; i <= 100; i++) {
//         // if(i % 3 === 0 && i % 5 === 0) {
//             if(i % 15 === 0) {
//             console.log('FizzBuzz');
//         } else if(i % 3 === 0) {
//             console.log('Fizz');
//         } else if(i % 5 === 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i)
//         }
//     }
// }

// const output = fizzbuzz();

// console.log(output);


////////////////////////////////////////////////////////////

for (var i = 1; i <= 100; i++) {
let output = "";

if(i%3 == 0) { output += "Fizz";}
if(i%5 == 0) { output += "Buzz";}

if(output == "") { output = i;}

console.log(output);
}