// this was my first javaScript code


//Primitive type
let fname = 'Mosh'; //String 
let aged = 30; //number
let isApproved = true; //boolean
let color = null; //null

//first object
let person = {
    name: 'Peres',
    age: 21
};


//dot notation
person.age = 32;

//bracket notation
person['name'] = 'Pedro';

//first array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';



//functions

function greet() {
    console.log('Hellow world')
}

greet();

function greet(name) {
    console.log('Hello ' + name);
}

greet('Pires');

function square(number) {
    return number * number;
}

let number = square(2);


console.log(number);
console.log(selectedColors);