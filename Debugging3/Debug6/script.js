//Fix the code to sum the number in that array

const num = [10, 20, 30, 40,50,60,70,80,90,100];
const initialValue = 0;
const sum = (accumulator, currentValue) => accumulator + currentValue;
const sumResult = num.reduce(sum,initialValue);
console.log(sumResult);