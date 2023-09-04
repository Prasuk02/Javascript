var climbStairs = function(n) {
    let output = 0
    let a = 0
    let b = 1
    for(let i=1; i<=n; i++){
        output = a + b
        a = b
        b = output
    }

    return output
}

console.log(climbStairs(5))