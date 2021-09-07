/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Determine if lasagna is ready
 *
 * @param {Number} timer
 * @returns {String} the lasagna status
 */
export function cookingStatus(timer) {
    if (timer === 0) return 'Lasagna is done.';
    if (!timer) return 'You forgot to set the timer.';
    return 'Not done, please wait.';
}

/**
 * Determine preparation time of the lasagna
 *
 * @param {Array} manyLayers
 * @param {Number} layers
 * @returns {Number} the preparation time for this lasagna
 */
export function preparationTime(manyLayers, layers = 2) {
    return manyLayers.length * layers;
}

/**
 * Determine if lasagna is ready
 *
 * @param {Array} fewLayers
 * @returns {Object} quantities of noodle and sauce
 */
export function quantities(fewLayers) {
    const quantis = { noodles: 0, sauce: 0 };
    fewLayers.forEach(e => {
        if (e === 'noodles') quantis.noodles += 50
        else if (e === 'sauce') quantis.sauce += 0.2
    }
    );
    return quantis;
}

/**
 * Determine if lasagna is ready
 *
 * @param {Array} friendsList
 * @param {Array} myList
 */
export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

/**
 * Determine if lasagna is ready
 *
 * @param {Object} recipe
 * @param {Number} scale
 * @returns {Array} my ingredients list
 */
export function scaleRecipe(recipe, scale) {
    for (const key in recipe) recipe[key] = recipe[key] / 2 * scale;
    return recipe;
}