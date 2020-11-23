var readlineSync=require("readline-sync");
var score=0;
var highscore=10;

console.log("how well you know Ajinkya?\n\n")
var user=readlineSync.question("User What is your name?: ")

console.log("\n\nWelcome "+ user + " :) ");
console.log("Rules: 2 points for every correct answer ");
console.log("lets play!!\n\n");

function play(question,answer)
{
userAnswer=readlineSync.question(question);
if(userAnswer===answer)
{
  score=score+2;
  console.log("correct :) "+score);
}
else
{
 console.log("wrong!!! "+score)
}


}

var questions=[
  
  {
  question:"what is ajinkya's surname?: ",
  answer:"jagdale"
  },
  
  {
  question:"where is ajinkya's hometown?: ",
  answer: "satara"
  },

  {
  question:"what is ajinkya's favourite football club?: ",
  answer:"chelsea"
  },

  {
  question:"what is ajinkya's favourite colour?: ",
  answer:"peach"
  },

  {
  question:"which is the only PC game ajinkya plays? ",
  answer:"fifa"
  },

  {
  question:"which book ajinkya finished reading recently?: ",
  answer: "zero to one"
  }
  ,
  {
    question:"what ajinkya will prefer? beaches or mountains: ",
    answer: "beaches"
  }
  
]

for(i=0;i<questions.length;i++)
{
 play(questions[i].question,questions[i].answer)

}
console.log("\n\n Good!! your final score is: "+ score );




var Players=[
  {
    name:"ajinkya",
    scored:14
  },
  {
    name:user,
    scored:score
  }

];

console.log("\n-----------------------------------");
if(score===Players[0].scored)
console.log("hurray!!! you created new highscore");
console.log("-----------------------------------\n");


console.log("HIGHSCORE\n");

function higher(name,scored)
{
  
  console.log(name + " : " + scored);
}


for(i=0;i<Players.length;i++)
{
  higher(Players[i].name,Players[i].scored);
}


