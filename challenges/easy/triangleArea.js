let rectangleArea = require('./rectangleArea')

/**
 * @param {number} a - the base
 * @param {number} b - the height
 * @returns {number} the area
 */

function triangleArea(a, b) {
  rectangleArea = (a * b) / 2;
  return rectangleArea 
}

module.exports = triangleArea