console.log("Hello, is anyone there??")



// this is a single line comment 

/* 
This is a multi line 
comment 

*/


// Python vs JS data types 
/* 

- Strings? --- same thing 
- Booleans? -- same thing, no cap-letters
- int? float -- numeric

*/

// Syntax -- snake_case is standard for python 
// and camelCase is standard for JS but either one is valid
myVariable = 9087 
my_variable = 987423
myVar = 445566
x = 987

// We want to be MORE specific about variable declaration
// rather than less , more to come on this later
var x = 876

console.log(x)

var teach = "cali";

console.log(teach);
console.log(typeof teach)

var bool1 = true;
var bool2 = false;

console.log(bool1)
console.log(typeof bool2)

//lists and dictionaries 
//arrays and objects

//array
var MyArr= [15, 6765, 145, "a string", true, 'last']

console.log(MyArr[0])
console.log(MyArr[3])

console.log(MyArr)


//Object
var myObject = {'aKey': "A Value"};
console.log(myObject)

console.log(myObject['aKey']) //Bracket Notation ALWAYS works 

console.log(myObject.aKey) // Dot notation USUALLY works ( No spaces)


console.log(unknownVar)
var unknownVar;
unknownVar = 77887;
console.log(unknownVar)

// Lets talk about the RIGHT way to define variables 

//let 
    // allows for re-definition but not re-declaration
//const
    // doesnt allow for either

// -- let myVar1 = 45
// -- myVar1 += 34
// -- console.log(myVar2)

// -- const myVar2 = 56
// //myVar1 += 345



//MATH !!

//pretty much the same as python 


//add +

let myNums = 10;
let myNums2 = 50;
let myNums3 = 33;

console.log(myNums + myNums2)


// Subtract -

console.log(myNums - myNums3)

// Multiply *

console.log(myNums * myNums2)

//divide /

console.log(myNums / myNums2)

//exponents **

console.log(2 ** 7)

/*
Rounding 

*/





// syntax
//def funcname (parameters):
// codeblock indented

//for JS there are a vareity of ways to define a function
// the most straight-forward way first:
//function <name of func>(parameters){code to execute}

function hiworld(){ return "hello JS world!"}
console.log(hiworld)
console.log(hiworld())

//THE JS VERSION OF THE PYTHON F-STRING IS WITH BACKTICKS
// DISPLAYED BELOW 
let hiworld2 = function (name){
    return `Hello ${name}`
}
console.log(hiworld2('buhay'))

//ANOTHER way, the arrow function 

// basic syntax () => {}
let hiworld3 = (n) => {
    return `hello and welcome mt/ms/mx ${n}`
}
console.log(hiworld3('adrian'))

console.log(((n)=>{return `hello and welcome mt/ms/mx ${n}`})('cali'))

/* Conditionals!!
Python:
if elif else 

JS:
if (conditional){
    code block
}else if (conditional){
    code block
}else {
    code block
}
*/

let age = 19;

if (age < 18){
    console.log("you are a kid")
} else if (age > 64) {
                console.log("youre a senior")
} else {
            console.log("your an adult")
}

// comparison operatiors:
/* Mostly the same as python 
< > <= >= THESE are all the same BUT 
and -->    &&
or ---> ||
and then there is the whole equality situation. . ..
= is assignment just like python 
== is VALUE equality 
=== is type and value equality 
*/
console.log('4' == 4)
console.log('4' === 4)

let color = "blue";

if (color === "blue"  || color === 'black'){
    console.log("THE OR STATMENT FIRED!")
} else if (color === "blue"  && color === 'black'){
    console.log("not gonna fire")
}

// SIDENOTE incrementing in JS by one ++ or --. otherwise +=


//LOOPS!

// The standard JS loop:
//pretty close to the index loop in python !
/*
python-
for i in range (len(iterable)):

JS -
for (let i = 0; i<iterable.length; i++){
    code block
}
*/

let itString = 'xyzcode'

for (let i = 0; i < itString.length; i++){
    console.log(itString[i])
}
/* python ex again:
for i in range (len(itString)):
    print(itString[i])

    */

for (let i = 0; i < itString.length; i++){
    for (let j = 1; j < 3; j++){
        console.log(itString[i], j)
    }
}



//while loop 

let ind= 0;
while (ind < 20){
    console.log(ind);
    ind++;
}

//for each, for of, and for in loops .... 

// do -while loop
// runs ONE no matter what!
do {
    console.log('THIS IS THE DIRST STEP  that is ALWAYS taken')
} while (false) {
    console.log('you should not see this running, but it will. .. ONCE')
}

// arrays
let animals = ['donkey', 'eagle', 'bear', 'zebra']

for (let i = 0; i < animals.length; i++){
    console.log(animals[i])
}

// adding and removing values 
animals.push('tiger', 'monkey')

console.log(animals)

//removing . . .  we DONT  have .remove()

animals.pop()
console.log(animals)

animals.splice(1, 3, "goat")

console.log(animals)

console.log(animals.slice(1,3))

// Other methods to mention
// indexOf()  .join()
// JS VERSION = 
console.log(animals.join(', '))

// PYTHON VERSION =
// 'seperator'.join(iterable) 

// switch case statment. . . a different conditional structure 

switch (animals[1]){
    case 'tiger' :
        console.log('nice strips');
        break;
    case 'donkey' :
        console.log('hee-haw');
        break;
    default :
        console.log("I dont even know what kinda animal you are!")
}