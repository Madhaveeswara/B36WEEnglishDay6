/*
Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

Output: 11 10 9 8 7 6 5 4 3 2 1

*/


var new_string = "";
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (var i = 10; i >= 0; i--) {
 if(i>0)   
   new_string += numsArr[i] + " ";
else 
   new_string += numsArr[i];
}
console.log(new_string);