function plus1(digits){
    let num = Number(digits.join(''))
    num++;
    num = num.toString()
    let arr = []
    for(let i of num){
        arr.push(Number(i))
    }
    // return num.toString().split('')
    return arr
}

console.log(plus1([9, 9, 9]))