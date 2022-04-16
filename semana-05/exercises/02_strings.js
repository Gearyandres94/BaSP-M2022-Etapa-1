/*The excersises are the next:
a)Create a variable of type string with at least 10 char and convert the text to uppercase. 
b)Create a variable of type string with at least 10 char and generate a new string with the first 5 char, 
saving it in a new variable.
c)Create a variable of type string with at least 10 char and generate a new string with the last 3 char, 
saving it in a new variable.
d)Create a variable of type string with at least 10 char and generate a new string with the first letter uppercase
and the rest in lowercase. Save the result in a new variable
e)Create a variable of type string with at least 10 char and a whitespace. Find the position of the whitespace
and store it in a new variable.
f)Create a variable of type string with at least two long words (ten char and some white space between them)
and generate a new string that contains the first letter in uppercase and the rest in lowercase.
*/

//Excersise a

var stringBefore='alfa_beta_epsilon';

var stringAfter= stringBefore.toUpperCase();

console.log(stringAfter);

//Excersise b

var chain = 'aabbccddee';

var subChain= chain.substring(0,5);

console.log(subChain);

//Excersise c

subChain= chain.substring(7,10);

console.log(subChain);

//Excersise d

subChain= chain.substring(0,1);

subChain= subChain.toUpperCase();

subChain+= chain.substring(1,10);

console.log(subChain);

//Excersise e

var name = 'Andres Geary';

var whiteSpace = name.indexOf(' ',0);

console.log('The blank space is located in the position ',whiteSpace);

//Excersise f

var countries = 'argentina e inglaterra';

var countriesUpperCase = countries.substring(0,1).toUpperCase(); 

countriesUpperCase += countries.substring(1,countries.indexOf(' ',0));

countriesUpperCase += countries.substring(countriesUpperCase.length, countriesUpperCase.length+3);

countriesUpperCase += countries.substring(countriesUpperCase.length,countriesUpperCase.length+1).toUpperCase();

countriesUpperCase+= countries.substring(countriesUpperCase.length,countries.length);

console.log(countriesUpperCase);