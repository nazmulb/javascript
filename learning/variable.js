'use strict'

var y = 2, 
    x = 3, 
    z;
    
x = " Nazmul";

z = y+x;

console.log(z);

var firstName = "Nazmul";

var address = "23 Shah Makhdum";

console.log(address);

var i = 2, j;
//j = i++;

i = i + 3;

i+=30;

j = ++i;

if(i==5){
    j=i;
}else{
    j=0;
}

j = (i==5) ? i : 0;

console.log(typeof j == "number" ? j : -1);

var marks = 90;

if(marks>=90){
    //
}else if(marks>=80 && marks<90){
    //
}else{
    //
}

var marks = 94;


switch(true){
    case (marks>=90):
        //asd
        //asdas
    break;

    case (marks>=80 && marks<90):

    break;

    default:
        //kkk
    break;
}