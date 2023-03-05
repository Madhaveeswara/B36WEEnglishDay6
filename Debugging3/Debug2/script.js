/*
Fix the code to Sum of the digits present in the number


*/

let n = 123;
console.log(add(n));

function add(n)
{
let sum = 0;
let tempArray = (n+"").split("");

for(var i=0;i<tempArray.length;i++){
 sum += parseInt(tempArray[i]);
 }
 return sum;
}