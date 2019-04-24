function add(x, y){
    return x+y;
}

var sub = new Function("x", "y", "return x-y");

console.log(add(4, 2)); 