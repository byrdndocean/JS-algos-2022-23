function fibonaaci(n) {
    const fib = [0, 1]
    for(let i = 2; i<n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(fibonaaci(2))
console.log(fibonaaci(3))
console.log(fibonaaci(7))
console.log(fibonaaci(5))