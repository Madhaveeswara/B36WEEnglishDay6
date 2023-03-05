/*
Fix the code to welcome the Employee.

*/

let login = 'Employee';
let message = (login == 'Employee') ? 
  ((login == 'Director') ? 'Greetings' :
  ((login == '') ? 'No login' :  'Employee')):"";
console.log(message);