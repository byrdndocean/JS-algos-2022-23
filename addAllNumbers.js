// ADD ALL NUMBERS
// RETURN A SUM OF ALL PARAMETERS ENTERED REGARDLESS OF THE AMOUNT OF NUMBERS
// example – addAll(2, 5, 6, 7) === 20


// ES5
// function addAll() {
//     var args = Array.prototype.slice.call(arguments);
//     var total = 0;
//     for(i = 0; i < args.length; i++) {
//         total += args[i]
//     }
//     return total;
// }

// console.log(addAll(2, 5, 6, 7, 5));

///////////////////////////////////////////////

//ES6
// Solution #2
// Rest Operator & reduce/forEach

// function addAll(...numbers) {
//     let total = 0;
//     numbers.forEach(num => total += num)
//     return total;
// }

// console.log(addAll(2, 5, 6, 7, 5));


//////////////////////////////////////////////////////

// Solution #3
// Reduce method
function addAll(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur);
}

console.log(addAll(2, 5, 6, 7, 5));