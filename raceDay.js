let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = true;
let age = 22;

//Control flow statement checking for adult + early registration
if(earlyReg && age > 18) {
  raceNumber += 1000;
}

//Check age and registration to determine race time
if (earlyReg && age > 18) {
  console.log(`Your race will begin at 9:30am and your race number is ${raceNumber}. Good luck!`);
} else if (!earlyReg && age > 18) {
  console.log(`Your race will begin at 11:00am and your race number is ${raceNumber}. Good luck!`);
} else if(age < 18) {
  console.log(`Your race will begin at 12:30pm and your race number is ${raceNumber}. Good luck!`);
} else {
  console.log("Please see us at the registration desk. Thanks!");
}
