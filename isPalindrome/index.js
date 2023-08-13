function isPalindrome(string){
    string = convertToAlphaNumbericString(string)
    // using 2 pointer method
    let start = 0;
    let end = string.length-1;
    while(start < end){
        if(string[start] == string[end]){
            start++;
            end--
        }
        else{
            return false
        }
    }
    return true
}

function convertToAlphaNumbericString_usingRegEx(string){
    string = string.toLowerCase().replace(/[^0-9a-z]/g, '');
    return string
}

function convertToAlphaNumbericString(string){
    string = string.toLowerCase();
    for(let i = 0; i<string.length; i++){
        if(!((string.charCodeAt(i) >=97 && string.charCodeAt(i) <= 122) || (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57))){
            string = string.replace(string[i], '')
            i--;
        }
    }
    return string
}


console.log(isPalindrome("A man, a plan, a canal: Panama"))