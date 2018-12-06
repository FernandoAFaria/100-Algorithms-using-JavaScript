function allLongestStrings(inputArray: any): string[] {
    let largest = inputArray[0].length;
    let largestArr = [];
    for(let i = 0; i < inputArray.length; i++){
        largest = inputArray[i].length > largest ? inputArray[i].length : largest;
    }
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length == largest){
            largestArr.push(inputArray[i])
        }
    }
    return largestArr;

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aasdfba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["abasdfa", "aa", "aasfdfd", "vcd", "aba"]));