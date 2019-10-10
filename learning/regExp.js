var str = "Hi, this is Nazmul";
//console.log(str.match('/^Hi Nazmul/'));


const starRating = "beliebig";
const starRatingCatInput = "#optCategory{txt}";
const number = (starRating === "beliebig") ? -1 : Math.round(starRating/2);
const starRateInput = starRatingCatInput.replace("{txt}", number);
//console.log(starRateInput);

const rawPrices = [ '1.942 €', '1.091 €', '954 €', '862 €', '844 €' ];

const prices = rawPrices.map (function (price) {
    return parseInt(price.match(/([0-9])+/g).join(""));
});
//console.dir(prices);


let hotelName = "9:00 - 20:00 Uhr";
hotelName = hotelName.match(/[+-]?([0-9]*[:])?[0-9]+/g);
//console.dir(hotelName);


function checkRange(a, b, x, y) {
    const x1 = parseInt(a.replace(":", ""));
    const y1 = parseInt(b.replace(":", ""));

    const x2 = parseInt(x.replace(":", ""));
    const y2 = parseInt(y.replace(":", ""));

    if (x2 <= x1 && y2 >= y1) {
        return true;
    }

    return false;
}

//console.log(checkRange("18:00", "22:45", "04:00", "21:00"));
//console.log(checkRange("07:30", "11:05", "00:00", "12:00"));

let text = "13.11.2019 \
ab 1.884,00 €";

const dateOfArrival = "2019-11-13";
let date = dateOfArrival.split("-");
date = `${date[2]}.${date[1]}.${date[0]}`;
console.log(date);

let isMatched = text.match(new RegExp(date, 'g'));
isMatched = (isMatched) ? isMatched.toString() : isMatched;
console.dir(isMatched);
//str1 = text.match(/13.11.2019/g);
console.dir(isMatched === date);

let str2 = "2019-11-13";
str2 = str2.split("-");
//console.dir(str2);
