const myAge = 25;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
//Accounting for number of dog years in later years
laterYears *= 4;
//Adding early and later years together
let myAgeInDogYears = earlyYears + laterYears;
let myName = "Liz".toLowerCase();
//Print human and dog ages to console
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
