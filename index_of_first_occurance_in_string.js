function findFirstOccurance(haystack, needle){
    // if(!haystack.includes(needle)){
    //     return -1
    // }
    for(let i=0; i<haystack.length; i++){
        if(haystack[i] == needle[0]){     
            let isEqual = true    
            for(let k=i; k<i+needle.length; k++){               //k=8, k<11 
                if(haystack[k] != needle[k - i]){   //h[8] != n[5] -> false
                    isEqual = false
                    break;
                }
            }
            if(isEqual){
                return i
            }
        }
    }
    return -1

    //one line code answer
    //* return haystack.indexOf(needle)
}

console.log(findFirstOccurance("asdsdbutsad", "sade"))        