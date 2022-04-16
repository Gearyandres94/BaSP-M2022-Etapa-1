/*The excersises are the next:
1)Create an array which contains five words and loop through that array using "for" of
Javascript to show an alert showing each of the words.
b)To the earlier array convert the first letter of each word in uppercase and
show an alert for each modified word.
c)Create an variable called sentence that has an empty string. Then loop through the earlier array
with a for and save each word inside the variable sentence. at the end show an only alert with the chain.
d)Create an empty array and a loop for with 10 repetitions. Fill the array with the number of the repetition.
And show it with console.log.
*/

//Excercise a

let fruits = ['banana', 'apple', 'pear', 'watermelon', 'orange'];

for (let i=0; i<fruits.length; i++)
{
    window.alert(fruits[i]);
}

//Excercise b

for (let i=0; i<fruits.length; i++)
{
    var chain= fruits[i].substring(0,1).toUpperCase();

    chain += fruits[i].substring(1,fruits[i].length);

    fruits[i]=chain;

    window.alert(fruits[i]);
}

//Excercise c

var sentence = '';

for (let i=0; i<fruits.length; i++)
{
    sentence += fruits[i];
}

window.alert(sentence);

//Excercise d

let emptyArray=[];

for (let i=1; i<11; i++)
{
    emptyArray.push(i);
    
    console.log(emptyArray[i-1])
}

