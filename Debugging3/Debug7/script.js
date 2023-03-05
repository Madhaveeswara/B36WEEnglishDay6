//Fix the code to rotate an array by k times and 
//return rotated array using IIFE function
// Input [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13]
// Output [6, 8, 6, 1, 9, 10, 12, 13, 1, 2, 3]




var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
//console.log(arr);
var k = 3;
//k = arr.length % k;
(function() {

    console.log(k);
        //arr = {};
        out = arr.slice(k , arr.length);

        console.log(out);

        var count = out.length;
        console.log(count);
        for (var i = 0; i < k ; i++) {
        out[count] = arr[i];
        count += 1;
        
 }
 console.log(out);
})();