/*The excersises are the next:
a)Create a random number between 0 and 1 using the function Math.random(). if the 
value is equal or greater than 0.5 show a aler with the messsaje ""
b)Create a variable called Age that contains an integer between 0 and 100
and shows the next alert messages:
i)“Bebe” if age is less than 2;
ii)“Niño” if age is between 2 and 12;
iii)“Adolescente” if age is between 13 and 19;
iv)“Joven” if age is between 20 and 30;
v)“Adulto” if age is between 31 and 60;
vi)“Adulto mayor” if age is between 61 and 75;
vi)“Anciano” if age is greater than 75.
*/

//Excercise a

var num = Math.random(0,1)

console.log(num);

if (num >= 0.5) 
{
    window.alert('Greater than 0.5');
}

else 
{
    window.alert('Lower than 0.5');
}

//Exercise b

var age = Math.floor (Math.random()*100);
console.log(age);

if (age<2)
{
    window.alert('Bebe')
}

else if (age<=12)
{
    window.alert('Niño')
}

else if (age<=19)
{
    window.alert('Adolescente')
}

else if (age<=30)
{
    window.alert('Joven')
}

else if (age<=60)
{
    window.alert('Adulto')
}

else if (age<75)
{
    window.alert('Adulto mayor')
}

else
{
    window.alert('Anciano')
}