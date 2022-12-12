// REVERSE AN INTEGER
// RETURN AN INTEGER IN REVERSE

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString) * Math.sign(int) ;
}

const output = reverseInt(-12345);

console.log(output);