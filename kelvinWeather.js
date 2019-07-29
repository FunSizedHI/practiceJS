//Starting with Kelvin
const kelvin = 293;
//Converting to Celsius
const celsius = kelvin - 273;
//Converting further to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Rounding down to nearest whole since decimal is likely
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//Converting Celsuis to Newton
let newton = celcius * (33/100);
//Rounding down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
