/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function (array) {
  array.forEach((element) => console.log(element));
};
/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function (temperatures) {
  // Your code here
  const celsius = temperatures.map(
    (temperature) => (temperature - 32) * (5 / 9)
  );
  return celsius;
};
/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function (temperatures, threshhold) {
  // Your code here
  const temp=temperatures.filter((degree)=> degree>threshhold) 
  return temp;
};
/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function (temperatures, threshhold) {
  // Your code here
  const tem=hottestDays(temperatures,threshhold);
  const degree=toCelsius(tem);
  logger(degree);
};
logHottestDays([56,45,34],40)

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
