/*The excersises are the next:
a)give the next array:['January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 
'October', 'November', 'December'] show the months 5 and 11 in console;
b)Arrange the months array in alphabetical order.
c)Add an element at the start of the array and another to the end.
d)remove an element from the start of the array and another at the end of the array
e)Invert the order of the array.
f)Join all elments of an array in a string, and separate every element with an (-).
g)Create a new copy of the array months that contain mayo to november.
*/

//Excercise a

let months = ['January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 
'October', 'November', 'December'];

console.log(months[4], " and ", months[10], ".");

//Excercise b

months.sort();

//Excercise c

months.push('fakemonth2');

months.unshift('fakemonth1');

//Excercise d

months.shift();

months.pop();

//Exercise e

months.reverse();

//Excersize f

var allMonths = months.join('-');

console.log(allMonths);

//Excersize g

let monthNew= ['January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 
'October', 'November', 'December'];

let monthsNewCopy = monthNew.slice(4,11);

console.log(monthsNewCopy.join('-'));