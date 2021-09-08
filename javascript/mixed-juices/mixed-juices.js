// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { time } from "console";

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time = 0;
  switch (name) {
    case 'Pure Strawberry Joy':
      time = 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      time = 1.5;
      break;
    case 'Tropical Island':
      time = 3;
      break;
    case 'All or Nothing':
      time = 5;
      break;
    default:
      time = 2.5;
      break;
  }
  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if (!wedgesNeeded || !limes.length) return 0;
  let counter = 0;
  let wedges = 0
  while (wedges < wedgesNeeded && counter < limes.length) {
    let limeWegdes = 0;
    switch (limes[counter]) {
      case 'small':
        limeWegdes = 6;
        break;
      case 'medium':
        limeWegdes = 8;
        break;
      case 'large':
        limeWegdes = 10;
        break;
    }
    counter++;
    wedges += limeWegdes;
  }
  return counter;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let counter = 0;
  let time = timeLeft;
  while (time > 0) {
    time -= timeToMixJuice(orders[counter]);
    counter++;
  }
  return orders.slice(counter);
}
