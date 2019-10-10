var fruits = [ "apple", "orange", "mango" ];
fruits[2] = "banana";

for(var i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

const amount = [954, 862, 1091, 1942, 844];
amount.sort(function(a, b){return b - a});

console.dir(amount);