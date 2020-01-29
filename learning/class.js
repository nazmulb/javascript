//Object style class

var Person = {
    name: "",
    color: "",
    eat: function (foodName){
        console.log(this.name+" is eatting "+foodName);
    },
    sleep: function(){
        console.log(this.name+" is sleeping");
    }
};

var p1 = Person;
p1.color = "Black";
p1.name = "Abdul";
p1.eat("Mango");
p1.sleep();

//prototype style class
var Woman = function(name){
    this.name = name;
    this.eat = function (foodName){
        console.log(this.name+" is eatting "+foodName);
    };
}

Woman.prototype.sleep = function(){
    console.log(this.name+" is sleeping");
}

Woman.prototype.color = "White";

var w1 = new Woman("Saima");
w1.eat("Icecream");
w1.sleep();
console.log(w1.color);


// function style class
function Man(name){
    this.name = name;
    this.color = "Balck";
    this.eat = function (foodName){
        console.log(this.name+" is eatting "+foodName);
    };

    this.sleep = function(){
        console.log(this.name+" is sleeping");
    } 
}

var m1 = new Man("Papon");
m1.eat("Lyche");
m1.sleep();

var m2 = new Man("Suruzzaman");
m2.eat("Burger");
m2.sleep();


//Class style

class Men 
{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    eat(foodName){
        console.log(this.name+" is eatting "+foodName);
    };

    sleep(){
        console.log(this.name+" is sleeping");
    }
}

class BDMan extends Men
{
    constructor(name, color){
        super(name, color);
    }

    run(){
        console.log(this.name +" is runing");
    }

    sleep(){
        super.sleep();
        console.log("sleep");
    }
}

var m1 = new BDMan("Sumon", "White");
m1.eat("Icecream");
m1.sleep();
m1.run();

//callback function in OOP JS
var someFunction = function (arg1, arg2, callback) {
    var myNumber = arg1 + arg2;

    callback(myNumber);
}

someFunction(5, 15, function(num) {
    console.log("callback called! " + num);
});


//javascript closure.
var magic = function () {
    return function (x) { 
        console.log(x * 42); 
    }
}

//magic()(2);

var answer = magic();
answer(1337); // 56154


//Self-Invoking Functions.
(function () {
    var x = "Hello!!";
    console.log(x);
})();


//ECMAScript6 / ES6:

//var vs let
//Block-Level Declarations
for (let i = 0; i < 10; i++) { 
	console.log(i);
}

// i is not accessible here
console.log(i); //i is not defined

//Arrow function
function sum(num1, num2) {
    return num1 + num2;
};

let sum = (num1, num2) => num1 + num2; 

function sum(num1, num2) {
    console.log(num1 + num2);
};

let sum = (num1, num2) => {
    console.log(num1 + num2);
}