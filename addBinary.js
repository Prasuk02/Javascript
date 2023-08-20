var addBinary = function(a, b) {
    let binaryMap = {
        0: 0,
        1: 1,
        2: 10,
        3: 11
    }
    let carry = 0
    let i=a.length-1
    let j=b.length-1 
    let result = '' 
    while(i>=0 || j>=0){  
        let sum;                          
        if(a[i] == undefined){
            // console.log("A")
            sum = binaryMap[0 + Number(b[j]) + carry]
        }
        else if(b[j] == undefined){
            // console.log("B")
            sum = binaryMap[Number(a[i]) + 0 + carry]
        }
        else{
            sum = binaryMap[Number(a[i]) + Number(b[j]) + carry]
        }
        // console.log("SUM: " ,sum)
        let currentValue = sum % 10;
        carry = Math.floor(sum / 10)           
        // console.log('CARRY: ', carry)                                          
        result = currentValue + result
        // console.log('RESULT: ', result)
        i--;
        j--
    }
    if(carry == 1){
        result = carry + result
    }
    return result
};


console.log(addBinary("11", "1"))