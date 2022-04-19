/*The excersises are the next:
a)Create a function sum that recives two numerical values and that returns the result.
Execute the function and save the result in a variable, showing the value in the browser console.
b)To the earlier function, add a validation to control if any of the parameters is not a number
and show an alert telling that one of the parameters got an error and return Nan as the result
c)Create a function called validate integer that recive a number as a parameter 
and returns if the number is an integer.
d)To the function of excercise b add a call that validates that the numbers are integers. In case there is
decimals show an alert with the error and return the number rounded as an integer.
e)Convert the validation of excercise d in a separate function and call it from inside the function
suma testing that everything works the same.
*/

//Excercise a

function suma(num1, num2)
{
    if(isNaN(num1) || isNaN(num2))
    {
        window.alert('One of the parameter is invalid')

        return Number.NaN; 
    }   
    
    else if (!Number.isInteger(num1) || !Number.isInteger(num2)) 
    {
        
        return isAnInteger(num1,num2);
    } 
    
    else 
    {
        return num1 + num2;
    }
}

var result = suma(5,6)

console.log(result);

//Excercise b

var result2 = suma('asdeaf',6)

console.log(result2);

//Excercise c

function validate_integer (num)
{
    if (Number.isInteger(num))
    {
        return console.log( num +' is an integer');
    }
    
    else 
    {
        return console.log(num + ' is not an integer');
    }
}

var num1=5, num2=5.5;

validate_integer(num1);

validate_integer(num2);

//Excercise d

var result3 = suma(7.5,6)

console.log(result3);

result3 = suma(8,9.5)

console.log(result3);

//Excercise e

function isAnInteger(num1,num2) {
    if (!Number.isInteger(num1)) 
    {
        window.alert(num1 + ' is a decimal')
        
        return Math.floor (num1+num2);
    } 

    else
    {
        window.alert(num2 + ' is a decimal')

        return Math.floor (num1+num2);
    }
}

console.log(suma(20.5,15))