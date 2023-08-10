function firstUniqChar(string){
    for(let i=0; i<string.length; i++){
        let isUniqueChar = true
        for(let j=0; j<string.length; j++){
            if(j == i){
                continue;
            }
            if(string[j] == string[i]){
                isUniqueChar = false
                break;
            }
        }
        if(isUniqueChar){
            return i
        }
    }
    return -1
}

console.log(firstUniqChar("loveleetcode"))