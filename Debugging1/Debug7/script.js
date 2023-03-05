/*
If you run the below scritpt you will get “Code is Blasted”

Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

*/


//var a = "2" > "12"; // "ASCII codes are compared "

// console.log("2 ASCII ::","2".charCodeAt(0));      50
// console.log("12 ASCII ::","12".charCodeAt(0));    49
var a = 2 > 12; // "Numeric values are compared."

//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}