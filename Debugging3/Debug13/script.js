// Sum of odd numbers in an array.

var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(accumulator,currentValue){
 if(currentValue%2 != 0)
 {
 return accumulator+currentValue;
 }
 return accumulator;}, 0);
console.log(s);