//Hoisting is JavaScript's default behavior of moving declarations to the top.
console.log(soma(7,7));

function soma(x, y) {
    return x + y;
}

//In JavaScript, objects have a special hidden property [[Prototype]]
//(as named in the specification), that is either null or references another object. 
//That object is called “a prototype”:
let animal = {
    eats: true,
    walk(){
        console.log('I am walking');
    }
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;//animal is the prototype of rabbit
 //the propertie "eats" is missing in rabbit, then it automatically takes it from animal
console.log(rabbit.eats)
//Here we can say that "animal is the prototype of rabbit" or "rabbit prototypically inherits from animal".
rabbit.walk();

//BUILT IN OBJECTS
var myString  = new String();
myString = "Olá, Renan";

var myLastName = new String("Lopes");

var day = new Date().getDate();
var month = new Date().getMonth();
var year = new Date().getFullYear();
var my_birthday = new Date("December 23 2022").getDate();
var daysToBirthday = my_birthday - day;
console.log(day, month, year, my_birthday, daysToBirthday)


