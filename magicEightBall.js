//Setting up the username response
var userName = "Liz";
userName ? console.log("Hello, Jane!") :
console.log("Hello!");

//Asking a question
let userQuestion = "Will I get to go on vacation this summer?";
  console.log(`${userName} asked: ${userQuestion}`);

//Generate random number
const randomNumber = Math.floor(Math.random() * 8);

//Eight Ball configuration
let eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = "It is certain.";
    break;
  case 1:
    eightBall = "It will be as you have said.";
    break;
  case 2:
    eightBall = "Reply hazy, try again.";
    break;
  case 3:
    eightBall = "In the pocket, cannot predict now.";
    break;
  case 4:
    eightBall = "Don't count on it.";
    break;
  case 5:
    eightBall = "My sources say no.";
    break;
  case 6:
    eightBall = "Outlook not so good.";
    break;
  case 7:
    eightBall = "The Force is strong with this one.";
    break;
}
console.log(`The eight ball says: ${eightBall}`);
