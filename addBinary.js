var addBinary = function(a, b) {                    //1010, 1011
    let binaryMap = {
        1: 1,
        2: 10,
        3: 11
    }
    let carry = 0                                   //1
    let i=a.length-1                                //-1
    let j=b.length-1                                //0
    let result = ''                                 //'0101'
    while(i>=0 || j>=0){  
        let sum;                          //-1>=0
        if(a[i] == undefined){
            // console.log("A")
            sum = binaryMap[0 + Number(b[j]) + carry]
        }
        else if(b[j] == undefined){
            // console.log("B")
            sum = binaryMap[Number(a[i]) + 0 + carry]
        }
        else{
            sum = binaryMap[Number(a[i]) + Number(b[j]) + carry]                //binaryMap[1 + 1 + 0]
        }
        // console.log("SUM: " ,sum)
        let currentValue = sum % 10;                                            //cv = 0
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