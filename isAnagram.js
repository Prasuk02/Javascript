/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false
    }
    
    let str1Map = {}
    let str2Map = {}

    for(let i=0; i<s.length; i++){
        if(s[i] in str1Map){
            str1Map[s[i]]++;
            continue
        }
        str1Map[s[i]] = 1
    }

    for(let i=0; i<t.length; i++){
        if(t[i] in str2Map){
            str2Map[t[i]]++;
            continue
        }
        str2Map[t[i]] = 1
    }

    for(let key in str1Map){
        if(key in str2Map){
            if(str2Map[key] != str1Map[key]){
                return false
            }
            continue
        }
        return false
    }
    return true
};