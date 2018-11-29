function addTwoDigits(n: any): number {
  let twoNums =  n.toString().split('')
  return parseInt(twoNums[0]) + parseInt(twoNums[1]);
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(11));
console.log(addTwoDigits(21));