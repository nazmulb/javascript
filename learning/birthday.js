var str = "12/20/1890";

var date = new Date();
console.log(date.toString());

var emp = new Array("Nazmul", "Kausar", "Kousik");

var loopemp = function (val, key){
    console.log(key + " - " + val);
}

emp.forEach(loopemp);