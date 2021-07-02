const readlinesync=require('readline-sync')
const chalk=require('chalk')

let score=0;
let playerName=readlinesync.question(chalk.bold.yellow("May I know your name ? "));

console.log(chalk.bold.blue("Welcome "+ playerName + " to HARRY POTTER QUIZ ?"))

function play(question,ans,options)
{
  console.log("Question ");
  console.log(chalk.bold.yellow(question));
  let playerAnswer=readlinesync.keyInSelect(options);
  if((playerAnswer+1) === ans){
    console.log(chalk.green("You are right"));
    score++;
  }
  else
  {
    console.log(chalk.red("You are wrong"));
  }

  console.log("Your current score is" ,score);
  console.log("------------------");
}


const questions=[{
  ques:"Who is Harry Potter's father? ",
  ans : 1,
  options:["James Potter","Rubeus Hagrid","Severus Snape","Gellert Grindelwald"]
},
{
  ques:"Who is Luna Lovegood's father?",
  ans:2,
  options:["Stephen","Xenophillius","Lucius","Robert"]
},
{
  ques:"What animal could Peter Pettigrew turn into? ",
  ans:4,
  options:["Owl","Snake","Wolf","Rat"]
},
{
  ques:"Who was the first goblin Harry ever met?",
  ans:3,
  options:["Fish","Gornuk","Griphook","Gringott"]
},
{
  ques:"What creature is Aragog?",
  ans:1,
  options:["Acromantula","Snake","Cerberus","Spider"]
},
{
  ques:"What was Hagrid's pet dog called?",
  ans:3,
  options:["Fluffy","Norbert","Fang","Buckbeak","Aragog"]
}];



for( let i=0;i<questions.length;i++){
  play(questions[i].ques,questions[i].ans,questions[i].options)
}

console.log("Congratulations Your final score is", score);
