function repeatedString(s, n) {

    let count = 0;
    let numOfA = 0;
    for(var i = 0; i < s.length; i++){
        s[i] == "a" ? numOfA++ : null
    }
    console.log(numOfA)
    return Math.ceil((numOfA/s.length) * n)
}

console.log(repeatedString('kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm', 736778906400))


//Testing a branch