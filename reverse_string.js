function reverseString(string){
    for(let i=0; i<Math.floor(string.length / 2); i++){
        let tempMemory = string[i]
        string[i] = string[string.length - 1 - i]
        string[string.length - 1 - i] = tempMemory
    }
    return string
}

console.log(reverseString(["h","e","l","l","o"]))