// 202. https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    n = n.toString()
    if(n == 1){
        return true
    }

    if((n.length == 1) && (n != 7)){
        return false
    }

    let sum = 0
    for(let digit of n){
        sum = sum + (digit * digit)
    }

    return isHappy(sum)
};