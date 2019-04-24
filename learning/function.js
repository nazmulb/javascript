'use strict';

function sayHello() {
    console.log("Hello Nazmul!");
}


function add(int x=5, int y=3){
    return x+y;
}

/*
 * This function can sustract to numbers
 * @param: number x [optional]
 * @param: number y [optional]
 * @return: number
 */
function sub(x=5, y=3){
    return x-y;
}

sayHello();

function cal(x, y, opt){
    var res;

    switch(opt){
        case '+':
            res = add(x, y);
        break;

        case '-':
            res = sub(x, y);
        break;

        default:
            res = add(x, y);
        break;
    }

    console.log(res);
}

cal(10, 4, '-');