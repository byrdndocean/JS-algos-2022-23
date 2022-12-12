// ARRAY CHUNKING
// SPLIT AN ARRAY INTO CHUNKED ARRAYS OF A SPECIFIC LENGTH

// function chunkArray(arr, len) {
//     // Init chunked arr
//     const chunkedArr = [];
//     // Set index
//     let i = 0;

//     // Loop while index is less than the array length
//     while(i < arr.length) {
//         // Slice out from the index to the index + the chunk length
//         // push on to the chunked array
//         // slice(start index, end index)
//         chunkedArr.push(arr.slice(i, i + len))
//         // Increment by chunk length
//         i += len
//     }
//     return chunkedArr
// }

// const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);

// console.log(output);

//////////////////////////////////////////////////////////////////

// SOLUTION 2
// forEach method

function chunkArray(arr, len) {
// Init chunked arr
const chunkedArr = [];

// Loop through arr
arr.forEach((val) => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if(!last || last.length === len) {
        chunkedArr.push([val]);
    } else {
        last.push(val);
    }
})

    return chunkedArr;
}

const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);

console.log(output);