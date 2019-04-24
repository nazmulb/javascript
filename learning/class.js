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

var w1 = new Woman("Keya");
w1.eat("Egg");
w1.sleep();
console.log(w1.color);




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


//Self-Invoking Functions.
var answer = magic();
answer(1337); // 56154


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