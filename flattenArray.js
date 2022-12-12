// FLATTEN ARRAY
// TAKE AN ARRAY OF ARRAYS AND FLATTEN TO A SINGLE ARRAY

// function flattenArray(arrays) {
//     // SOLUTION 1
//     return arrays.reduce((a, b) => a.concat(b))}

// const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);

// console.log(output);


////////////////////////////////////////////////

// SOLUTION 2
// APPLY METHOD

// function flattenArray(arrays) {
// return [].concat.apply([], arrays)
// }

// const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);

// console.log(output);


////////////////////////////////////////////////
// EXAMPLE OF SPREAD OPERATOR
// function add(a, b, c) {
//     return a + b + c;
// }
// const arr = [1, 2, 3];
// console.log(add(...arr));

/////////////////////////////////////////////////

// SPREAD OPERATOR

function flattenArray(arrays) {
return [].concat(...arrays)
}

const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);

console.log(output);