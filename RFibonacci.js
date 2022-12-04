// function recursiveFibonacci(n) {
//     if(n < 2) {
//         return n
//     }
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }

// console.log(recursiveFibonacci(0)) // 0
// console.log(recursiveFibonacci(1)) // 1
// console.log(recursiveFibonacci(6)) // 8

const fib = (n) => {
    if(n > 1) {
        return fib(n -1) + fib(n - 2);
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return "invalid";
    }
};