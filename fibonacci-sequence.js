//Fibanocci sequence iterative

function fibonacci(n){
    let a = 0
    let b = 1
    let c = 0

    for(let i = 2; i <= n; i++){
        c = a + b
        a = b
        b = c
    }
    return b
}

console.log(fibonacci(10)) //55

//Fibanocci sequence recursive
function fibonacciRecursive(n){
    if(n < 2){
        return n
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(10)) //55