let d = new Date("2019-11-12"); 
//d.setFullYear(d.getFullYear()+3, d.getMonth()-1, d.getDate());
let date = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
//console.log(d.getTime()/1000|0);
console.log(date);

let time = "00:00";
time = (parseInt(time) * 10);
console.log(parseInt(time));