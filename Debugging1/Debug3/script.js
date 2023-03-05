alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working



//The line break triggers a semi-colon insertion.
//A semicolon is optional only where there is a line break, a closing brace, or the end of the program.

//Restricted productions are those in which a line break cannot appear in a particular position, so if a line break appears there, 
//it will prevent the program from parsing in that way, though it may still parse another way.

//There are five restricted productions in the grammar, they are the postfix operators ++ and --,
// continue statements, break statements, return statements, and throw statements.

/*


// ThrowStatement : throw [no LineTerminator here] Expression ;
throw                                          // parse error
  new MyComplexError(a, b, c, more, args);
// Unlike the return, break, and continue statements, 
// the expression after "throw" is not optional, 
// so the above will not parse at all.
throw new MyComplexError(a, b, c, more, args); // correct

*/

//Reference https://web.archive.org/web/20190308200819/http://inimino.org/~inimino/blog/javascript_semicolons
