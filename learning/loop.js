for(var i=10; i<=50; i+=10){
    console.log(i);
}

console.log('----------------------------');

var i = 10;
while(i<=60){
    console.log(i);
    i+=10;
}

console.log('----------------------------');

var i = 10;
do{
    console.log(i);
    i+=10;
}while(i<=70);

var fruits = [ "apple", "orange", "mango" ];

for (fruit in fruits) {
    console.log(fruits[fruit]);
}


for(var i=0; i<=3; i++){
    for(var j=i; j<=2; j++){
        console.log(i + ' - ' + j);
    }
}