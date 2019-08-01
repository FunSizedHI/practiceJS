//Sleep hours log
const getSleepHours = day => {
  if(day === 'Monday') {
    return 8;
  } else if(day === 'Tuesday') {
    return 7;
  } else if(day === 'Wednesday') {
    return 6;
  } else if(day === 'Thursday') {
    return 5;
  } else if (day === 'Friday') {
    return 4;
  } else if(day === 'Saturday') {
    return 3;
  } else if(day === 'Sunday') {
    return 2;
  }
}

//Actual sleep hours
const getActualSleepHours = () =>
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');

//Ideal sleep hours per week
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
  /* Could also use:
    const getIdealSleepHours = idealHours => idealHours * 7;
  */
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep -- keep it up!");
  } else if(actualSleepHours > idealSleepHours) {
    console.log("Feeling beautiful? You got more sleep than needed!");
  } else {
    console.log("You should get some shut-eye ASAP.");
  }

  if(actualSleepHours > idealSleepHours) {
    console.log("You got " + (actualSleepHours - idealSleepHours) + "hour(s) more hours of sleep than you needed this week. Keep it up!");
  } else if(actualSleepHours === idealSleepHours) {
    console.log("Got hit your sleep goal of 56 hours this week, great job!");
  } else {
    console.log("You got " + (idealSleepHours - actualSleepHours) + "hours less sleep than you needed this week. Get some rest.");
  }

}

//program start
calculateSleepDebt();
