// Fix the code to gen Title caps.

var arr = ["guvi", "geek", "zen", "fullstack"];

(function() {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})();