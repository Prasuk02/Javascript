// 258. https://leetcode.com/problems/add-digits/

var addDigits = function(num) {
    num = num.toString()
    if(num.length == 1){
        return Number(num)
    }
    let sum = 0
    for(let digit of num){
        sum = sum + Number(digit)
    }
    return addDigits(sum)
};