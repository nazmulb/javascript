var str = "Hi, this is Nazmul";
//console.log(str.match('/^Hi Nazmul/'));

const starRating = "beliebig";
const starRatingCatInput = "#optCategory{txt}";
const number = starRating === "beliebig" ? -1 : Math.round(starRating / 2);
const starRateInput = starRatingCatInput.replace("{txt}", number);
//console.log(starRateInput);

const rawPrices = ["1.942 €", "1.091 €", "954 €", "862 €", "844 €"];

const prices = rawPrices.map(function (price) {
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
//console.log(date);

let isMatched = text.match(new RegExp(date, "g"));
isMatched = isMatched ? isMatched.toString() : isMatched;
//console.dir(isMatched);
//str1 = text.match(/13.11.2019/g);
//console.dir(isMatched === date);

let str2 = "2019-11-13";
str2 = str2.split("-");
//console.dir(str2);

let textArray = [
  "🌳MR TRREEE! Do you see all of these people using Plastic bags? 🛑Throwing them to the ground as though they will just dissapear?! 😱Frightening indeed my tall green friend. Luckily @veriff.me Is fighting back against those nasty plastic abominations and spreading the news with #goodbyebadbag and handing out some of their fancy new #veriff reusable bags. 🛍 My super cool friends from the smoking hot startup have stopped using all plastic bags in their office. 🦄 They are asking people to do the same and spread the word. 💪It sounded like a great chance to support a good initiative... and climb a tree :) Using no plastic bags is one of easiest possible thing you could do to make the world a better, more sustainable place.💯♻️ #startupestonia #startuplife #founderstories #estonia #Tallinn #plasticbagssuck #byebyebadbag",
  "James and the giant peach is the story of a boy with a tragic childhood. The boys parents are eaten by rhinoceros's. 🦏 The boy is then sent to lice with his 2 abusive aunts on top of a desolate, lonely hill. 🌧 He is mistreated, he sleeps on the floor and he is beaten without reason by his aunts... i have loved this story since i was a child. Because one day james encounters a man who gives him magic seeds. He drops them, onto a peach tree. 🌱 Suddenly, a giant peach grows, the size of a hundred houses. Sweet, soft and impossibly large. While his aunts try desperately to take from him the peach, he climbs inside to find a group of unlikely friends living inside. 🦗 The group then, together fly the peach to New York City, where they are celebrated as heros after the peach is impaled on the Empire State Building. 🍑 What i love about this story is that through his suffering, James finds hope within himself that he won't allow to be taken away. He overcomes great challenges and leaves his struggled past behind him. He finds his imperfect family of creatures and together, they become heros. Ever since i heard this story as a kid, i've kept New York City a special place in my heart. Thanks for hosting us Google, the view from your balcony is one i could put a stamp of approval on. 🏙 #startupstories #startupnation #startupgrind #googleforstartups #novascotian #founders #newyorkgram #tallinn #startupestonia",
  "😁 Just found this incredible photo of 4 of my favourite people. @kwunlokng , @renatajohanson @matthiasmarkus and @sawwds all have have many superpowers. 💪 But perhaps most impressive is their incredible ability to put up with me 😘 (we are also all massively photogenic, as you can see). Surround yourself with good people, people. You truly are the sum of the 5 people you spend the most time with, in my personal opinion. #startupstories #startuplife #tallinn #tallinna #findyourpeople",
  "You see that guy beside me? 👤Thats young Kaarel Kotkas. Kaarel is 24 now, he built a company called @veriff.me to help protect people from having their identities stolen. 🦄 I met Kaarel months ago, and the weirdest thing about the expierence was that within minutes i felt like we had been friends for years. Talking about his time at @ycombinator and the struggles he had been through saving Veriff in insane circumstances.🦉 Today, they reached their 100th employee and asked Modash to help them celebrate. If there is anywhere in the world i reccomend you to apply for a job today, its with them. #Veriff100 PS: Even my mom applied 😃 #tallinn #Estonianmafia #futureunicorn #startupestonia #startuplife",
];

let testHash = "#begin foobar #Has #Hell123 #hello and #what, #ending";
let testMen = "@begin foobar #well @Has @Hell123 @hello and @what, @ending";
let hashtags = testHash.match(/(?:^|\s)(?:#)([a-zA-Z\d]+)/gm);

console.dir("--------------");
const matches = new Map();
function getHashTags(inputText) {
  inputText = inputText.toLowerCase();
  const regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
  let match;

  while ((match = regex.exec(inputText))) {
    if (matches.has(match[1])) {
      matches.set(match[1], matches.get(match[1]) + 1);
    } else {
      matches.set(match[1], 1);
    }
  }

  return matches;
}

for (const key in textArray) {
  getHashTags(textArray[key]);
}

console.dir(matches);
const mapSort1 = new Map([...matches.entries()].sort((a, b) => b[1] - a[1]));
console.dir(mapSort1);
let arrays = Array.from( mapSort1.keys() );
console.dir(arrays.slice(0, 5));

