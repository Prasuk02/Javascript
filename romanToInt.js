var romanToInt = function(s) {          //1000 + 100 + 1000
    let romanMap = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let result = 0
    for(let i=0; i<s.length; i++){
        if((s[i] == 'I') && (s[i + 1] == 'V' || s[i + 1] == 'X')){
            result = result + (romanMap[s[i+1]] - romanMap[s[i]])
            i++
            continue;
        }
        else if((s[i] == 'X') && (s[i + 1] == 'L' || s[i + 1] == 'C')){
            result = result + (romanMap[s[i+1]] - romanMap[s[i]])
            i++
            continue;
        }
        else if((s[i] == 'C') && (s[i + 1] == 'D' || s[i + 1] == 'M')){
            result = result + (romanMap[s[i+1]] - romanMap[s[i]])
            i++
            continue;
        }
        result = result + romanMap[s[i]]
    }

    return result;
};

console.log(romanToInt('III'))