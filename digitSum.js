// 2243. https://leetcode.com/problems/calculate-digit-sum-of-a-string/

var digitSum = function(s, k) {
    if(s.length <= k){
        return s
    }

    let groups = []
    let digits = ''
    for(let i=0; i<s.length; i++){
        digits = digits + s[i]
        if((i+1) % k == 0){
            groups.push(digits)
            digits = ''
        }
    }
    if(digits){
        groups.push(digits)
        digits = ''
    }
    
    for(let group of groups){
        let sum = 0
        for(let digit of group){
            sum = sum + Number(digit)
        }
        digits = digits + sum
    }

    return digitSum(digits, k)
};