// SEEK & DESTROY
// Remove from the array whatever is in the following arguments.  Return the leftover values in an array
// So we have an array in the 1st argument, what we put in the 2nd argument will be removed from that array


// SOLUTION 1: arguments, indexOf, filter
// function seekAndDestroy(arr) {
//     const args = Array.from(arguments);

//     function filterArr(arr) {
//         // Return true if NOT in array
//         return args.indexOf(arr) === -1;
//     }

//     return arr.filter(filterArr);
// }

// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6, 'hello'));

//////////////////////////////////////////////////////////////////////////////////


// SOLUTION 2: ...rest, filter & includes
function seekAndDestroy(arr, ...rest) {
    return arr.filter(val => !rest.includes(val));
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6, 'hello'));