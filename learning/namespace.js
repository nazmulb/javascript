var Nazmul = Nazmul || {};

Nazmul.Person = {
    name: "",
    color: "",
    eat: function (foodName){
        console.log(this.name+" is eatting "+foodName);
    },
    sleep: function(){
        console.log(this.name+" is sleeping");
    }
};

var p1 = Nazmul.Person;
p1.color = "Black";
p1.name = "Abdul";
p1.eat("Mango");
p1.sleep();