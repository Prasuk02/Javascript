// function plus1(digits){
//     let num = Number(digits.join(''))
//     num++;
//     num = num.toString()
//     let arr = []
//     for(let i of num){
//         arr.push(Number(i))
//     }
//     return arr
// }

//Using carry method
function plus1(digits){
    let carry = 0;                                                  //0     1
    for(let i = digits.length - 1; i>=0; i--){                      //i=16, 16>=0
        let currentValue = 0;                                       //0     0
        let sum = 0                                                 //0     0
        if(i == digits.length - 1){                                 
            sum = digits[i] + 1
        }
        else{                                                       //sum = 6
            sum = digits[i] + carry
        }
        if(sum > 9){                                                //false
            currentValue = sum % 10;                                
            // carry = Math.round(sum / 10)
            carry = 1                                               
        }
        else{
            currentValue = sum;                                     //currentValue = 6
            carry = 0                                               //carry = 0
        }
        digits[i] = currentValue                                    //digits[18] = 6
    }
    if(carry){
        digits.unshift(carry)
    }
    return digits
}

console.log(plus1([9,9]))