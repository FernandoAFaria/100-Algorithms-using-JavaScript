function adjacentElementsProduct(inputArray: number[]): number {
    let largest =  inputArray[0] * inputArray[1];
    for(let i = 0; i < inputArray.length; i++){
        if (inputArray[i] * inputArray[i + 1] > largest){
            largest = inputArray[i] * inputArray[i + 1];
        }
    }

    return largest;

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

console.log(adjacentElementsProduct([3, 3, -2, 4, 7, 3]));