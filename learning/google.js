async function quickStart() {
  // Imports the Google Cloud client library
  const language = require("@google-cloud/language");

  // Instantiates a client
  const client = new language.LanguageServiceClient();

  // The text to analyze
  const text = "Hello, world!";

  const document = {
    content: text,
    type: "PLAIN_TEXT",
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({ document: document });
  const sentiment = result.documentSentiment;

  console.log(`Text: ${text}`);
  console.log(`Sentiment score: ${sentiment.score}`);
  console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
}

//quickStart();

async function quickStartRestText() {
  const axios = require("axios");
  const API_KEY_GCP = "YOUR_KEY";
  const constType = "PLAIN_TEXT";
  const contentText = `
    Google, headquartered in Mountain View (1600 Amphitheatre Pkwy, Mountain View, CA 940430), 
    unveiled the new Android phone for $799 at the Consumer Electronic Show. Sundar Pichai said 
    in his keynote that users love their new Google Android phones. I am a fan of Google nexux 5x, 
    so the Google is the best :). I also like Apple products, like Apple mac pcs. 
    `;
  const requestBdoy = {
    document: {
      type: constType,
      language: "EN",
      content: contentText,
    },
    features: {
      extractSyntax: false,
      extractEntities: true,
      extractDocumentSentiment: false,
      extractEntitySentiment: true,
      classifyText: true,
    },
    encodingType: "UTF8",
  };

  axios
    .post(
      `https://language.googleapis.com/v1beta2/documents:annotateText?key=${API_KEY_GCP}`,
      requestBdoy
    )
    .then(function (response) {
      // handle success
      console.dir(response.data);

      const entities = response.data.entities;
      const categories = response.data.categories;

      console.log("Entities and sentiments:");
      entities.forEach((entity) => {
        if (entity.type === "ORGANIZATION") {
          console.log(`Name: ${entity.name}`);
          console.log(
            `Score: ${entity.sentiment.score}, Ratio: ${
              entity.sentiment.score * 100
            }%`
          );
        }
      });

      console.log("Text Classification:");
      categories.forEach((category) => {
        console.log(
          `Name: ${category.name}, Confidence: ${category.confidence}, Ratio: ${
            category.confidence * 100
          }%`
        );
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

console.log("---------------");
//quickStartRestText();

async function quickStartImages() {
  // Imports the Google Cloud client library
  const vision = require("@google-cloud/vision");

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.labelDetection(
    "https://instagram.ftll1-1.fna.fbcdn.net/v/t51.2885-15/e15/95096399_718187358925964_4269722698754055905_n.jpg?_nc_ht=instagram.ftll1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=wL7OeXZHnLMAX-b-DpZ&oh=b6df7ee01dbcf390af64505159bf4add&oe=5EA977F1"
  );
  const labels = result.labelAnnotations;
  console.log("Labels:");
  labels.forEach((label) => console.log(label.description));
}

//quickStartImages();

async function quickStartRestImage() {
  const axios = require("axios");
  const API_KEY_GCP = "YOUR_KEY";

  const requestBdoy = {
    requests: [
      {
        image: {
          source: {
            imageUri:
              "https://instagram.ftll1-1.fna.fbcdn.net/v/t51.2885-15/e15/95096399_718187358925964_4269722698754055905_n.jpg?_nc_ht=instagram.ftll1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=wL7OeXZHnLMAX-b-DpZ&oh=b6df7ee01dbcf390af64505159bf4add&oe=5EA977F1",
          },
        },
        features: [
          {
            type: "TEXT_DETECTION",
          },
        ],
      },
      {
        image: {
          source: {
            imageUri:
              "https://instagram.ftll1-1.fna.fbcdn.net/v/t51.2885-15/e35/95008798_1952679888199593_7408566697593559042_n.jpg?_nc_ht=instagram.ftll1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Fq4xWEEzFTMAX8V12CN&oh=e629a11f58309bcc0ea4b41c85ae6d9f&oe=5EA9E51D",
          },
        },
        features: [
          {
            type: "TEXT_DETECTION",
          },
        ],
      },
    ],
  };

  axios
    .post(
      `https://vision.googleapis.com/v1p4beta1/images:annotate?key=${API_KEY_GCP}`,
      requestBdoy
    )
    .then(function (response) {
      // handle success
      console.dir(response.data.responses);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

console.log("---------------");
quickStartRestImage();

const rowtext = ` 🌳MR TRREEE! Do you see all of these people using Plastic bags? 🛑Throwing them to the ground as though they will just dissapear?! 😱Frightening indeed my tall green friend. Luckily @veri[34/1813]
api    | Is fighting back against those nasty plastic abominations and spreading the news with #goodbyebadbag and handing out some of their fancy new #veriff reusable bags. 🛍 My super cool friends from
the smoking hot startup have stopped using all plastic bags in their office. 🦄 They are asking people to do the same and spread the word. 💪It sounded like a great chance to support a good initiative.$3]
. and climb a tree :) Using no plastic bags is one of easiest possible thing you could do to make the world a better, more sustainable place.💯♻️ #startupestonia #startuplife #founderstories #estonia #$3]
allinn #plasticbagssuck #byebyebadbagJames and the giant peach is the story of a boy with a tragic childhood. The boys parents are eaten by rhinoceros's. 🦏 The boy is then sent to lice with his 2 abus$]
ve aunts on top of a desolate, lonely hill. 🌧 He is mistreated, he sleeps on the floor and he is beaten without reason by his aunts... i have loved this story since i was a child. Because one day james
encounters a man who gives him magic seeds. He drops them, onto a peach tree. 🌱 Suddenly, a giant peach grows, the size of a hundred houses. Sweet, soft and impossibly large. While his aunts try despe$]
ately to take from him the peach, he climbs inside to find a group of unlikely friends living inside. 🦗 The group then, together fly the peach to New York City, where they are celebrated as heros after
the peach is impaled on the Empire State Building. 🍑 What i love about this story is that through his suffering, James finds hope within himself that he won't allow to be taken away. He overcomes grea$]
 challenges and leaves his struggled past behind him. He finds his imperfect family of creatures and together, they become heros. Ever since i heard this story as a kid, i've kept New York Cit a specia$
l place in my heart. Thanks for hosting us Google, the view from your balcony is one i could put a stamp of approval on. 🏙 #startupstories #startupnation #startupgrind #googleforstartups #novascotian #$
ounders #newyorkgram #tallinn #startupestonia😁 Just found this incredible photo of 4 of my favourite people. @kwunlokng , @renatajohanson @matthiasmarkus and @sawwds  all have have many superpowers. 💪$$
 But perhaps most impressive is their incredible ability to put up with me 😘 (we are also all massively photogenic, as you can see). Surround yourself with good people, people. You truly are the sum o$]
 the 5 people you spend the most time with, in my personal opinion.  #startupstories #startuplife #tallinn #tallinna #findyourpeopleYou see that guy beside me? 👤Thats young Kaarel Kotkas. Kaarel is 24 ]
now, he built a company called @veriff.me to help protect people from having their identities stolen. 🦄  I met Kaarel months ago, and the weirdest thing about the expierence was that within minutes i $]
elt like we had been friends for years. Talking about his time at @ycombinator and the struggles he had been through saving Veriff in insane circumstances.🦉 Today, they reached their 100th employee an$]
 asked Modash to help them celebrate. If there is anywhere in the world i reccomend you to apply for a job today, its with them. #Veriff100 PS: Even my mom applied 😃                                    ]
api    | #tallinn #Estonianmafia #futureunicorn #startupestonia #startuplifeThis photo will never get old for me. @waldec on stage with me in Kyiv. 🇺🇦 Martin's most impressive trait is probably his hu
mility. A common one amongst the founders I've had on stage. 🙏When you focus on getting things done instead of what others think of what you do i guess you adopt this humble mentality. 🎉Shouts to @lif
t99co and @veriff.me for helping to make the show happen! 🎉
#startuplife #founderstories #Kyiv #startupestonia #taxify #tallinn #startupstories #Estonianmafia #lift99coSuper psyched to have the opportunity to attend Vormsi Reload. 🇪🇪Reload is or[14/1813]
d to gather the hive-mind of Estonian startup ecosystem players. 🗣 The discussion, challenges and networking are super promising. 🔥Let’s see if it leads to real action, or if talk is where the buck sto
ps. Also check those ears, #highfashion. 🕺  #startuplife #startupestonia #Tallinna #estonianmafia #startupstoriesHave conversations so good you’re not sure you even deserve them. 🎉 The event with @kaa
relkotkas of Veriff felt like a milestone in my life. I was nearly in tears watching his reaction to the company he built sitting on the wall of fame. 🌟 Having so many people laugh with us made my hear
t sing. I’m very grateful for that. ❤️ #startupstories #tallinn #tallinna #startuplife #estonianmafiaAhh! So I was gone. I had a phone and broke it, I had another one, a ghost broke it. You know ever si
nce I was a kid and I discovered YouTube i've had a part of me that wanted to be closer to that culture. But I suffered at the thought of eyeballs on me. The idea of talking into the camera still scares
 me. Stages make me sweat. But I keep getting on there. I got a message on Facebook yesterday from a guy telling me how stupid these events are. How dumb of an idea it is for me to do this that noone wo
uld watch these. He is not the first person. Lucky for me, we've teamed up with Estonia's most prolific startup hub @lift99co to revamp and take it to the next level. Thanks to their help the previous o
ne was a huge success with a packed house. You don't have to accept doubt as truth. Rant complete. To attend the next event, the link is in my bio. How you doing? #startuplife #lift99 #tallinna #startup
stories #startupestonia #podcastsA lot of people are graduating  right now. 🗓️ I'm so proud of you. I hardly made it through that place. I skipped the end of class to go to work. I barely passed my math
 classes. I felt incredibly anxious 100% of the time. 🔭 I took a gap year, I dropped out of University and I'm living a life that is such an insane roller coaster. I wouldnt have it any other way. 💪 I
 challenge you to do things that are far outside of your comfort zone. Write often. Read books and meet weird people and do stuff other people think is stupid. Climb mountains and eat cheap food and liv
e in a tent. Start company's and cry about them and call your mom when you have to. Blow all your money on coffee and then live on free food at networking events. That's where the real fun is 🎉 Photo c
ourtesy of @lift99co and smile courtesy of all the cool people in the community who are stupidly inspiring. Rant over. #startupstories #startuplife #graduated #tallinn  #tallinna #2cool4school 😜I been
gone for a minute but I'm back now. 🎶 I successfully managed to throw my phone down the stairs 📱🔨 to celebrate this grand achievement let's throw back to my smug mug at a wedding a couple of years ba
ck. 😏 I remember the funny days feeling so perfectly uncertain. Wishing you well lovely humans! 😘 Do you ever look back and think " what was I thinking about in that photo"? This one is  Featuring The
 always lovely @luca.liese and @frenzileila #tallinn #tallinna #founder #startupstories #throwbackmonday #estonianmafia Can't believe it but this photo = #nofilterneeded☺️ Super fun, super spontaneous c
hat for @startup_estonia with @lokinkl about startups, Estonia and the meaning of life. Jumping on the 7Blaze social media podcast today with @jaankruusma  Launching @modash.io this week, crazy crazy mo
re and more craziness. 😃 #startuplife #startupestonia @lift99co #startupstories #founder🤫I think I stole that look from @nicholastoole . I’m on my way to Budapest to look for the best founders in the s
cene. 🚀 @lift99co has sent me on a serious mission. 🤔Figure out exactly who is who and offer them an invite to an exclusive event featuring @markusvillig, now the youngest founder of a 1,000,000,000 $
ompany, @taxify . The young and insanely inspiring Markus will be speaking to founders only, and only the best, about what it takes to do what he has done. Who and what do I need to see in #budapest🇭🇺  $
 ? #startupstories #founder`;

//console.log(rowtext.replace(/[^\w\s\?\.&\/\\,';"+():*<>$%!=-\[\]@#~`|]/gi, ''));
