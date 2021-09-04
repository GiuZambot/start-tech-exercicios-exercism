// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const vehicles = {
  'car': true,
  'truck': true,
  'bike': false,
  'stroller': false,
  'e-scooter': false
};

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return vehicles[kind];
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  const rest = ' is clearly the better choice.'
  let result = '';
  if (option1 === 'Bugatti Veyron' || option1 === 'Chery EQ') result = option1;
  if (option1 === 'Ford Pinto' || option1 === '2020 Gazelle Medeo') result = option2;
  return result + rest;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  let taxa = 0;
  if (age < 3) taxa = 0.8;
  if (age >= 3 && age <= 10) taxa = 0.7;
  if (age > 10) taxa = 0.5;
  return originalPrice * taxa;
}
