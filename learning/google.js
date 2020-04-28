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
      {
        image: {
          content:
            "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",
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
