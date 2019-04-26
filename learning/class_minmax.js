class MaxMin {
    constructor(arr) {
        console.log("Constructor initialized!");
        this.arr = arr;
    }

    getMin() {
        var min = this.arr[0];
        for(var i=1; i<this.arr.length; i++) {  
            if(min > this.arr[i]) {
                min = this.arr[i];
            }
        }
        return min;
    }

    getMax() {
        var max = this.arr[0];
        for(var i=1; i<this.arr.length; i++) {  
            if(max < this.arr[i]) {
                max = this.arr[i];
            }
        }
        return max;
    }
}

class MaxMinSum extends MaxMin  {
    constructor(arr) {
        super(arr);
    }

    getSum() {
        var sum = 0;
        for(var i=0; i<this.arr.length; i++) {
            sum += this.arr[i];
        }
        return sum;
    }   
}

function getMaxOrMinOrSum(arr, option) {
    var num = new MaxMinSum(arr);
    switch(option.toUpperCase()) {
        case 'MAX': 
            value = num.getMax();
        break;
        case 'MIN':
            value = num.getMin();
        break;
        case 'SUM':
            value = num.getSum();
        break;
        default:
            value = "Invalid option. Provide 'MIN' or 'MAX' or 'SUM'";
        break;
    }
    return value;
}


var arr = [5,10,45,100,80,7,9,108,1,500];
var value = getMaxOrMinOrSum(arr, 'max');
console.log(value);
value = getMaxOrMinOrSum(arr, 'min');
console.log(value);
value = getMaxOrMinOrSum(arr, 'sum');
console.log(value);