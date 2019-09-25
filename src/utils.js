/**
 * @function allCaps
 * @description
 * Splits words by space, and for each word sets its first letter in uppercase and the remaining letters in lowercase
 * @summary
 * Capitalizes all words in the sentence.
 *
 * @param {String} text - text to be capitalized
 * @returns {String} All Caps of text
 * @throws {TypeError} string expected, got type
 *
 * @example
 * // Generate default greeting (depending on process.env.GREETING)
 * const result = allCaps('tesT mE')
 * //=> Test Me
*/

export const allCaps = str => {
  if (typeof str !== 'string') {
    throw new TypeError('wrong parameter type, string expected')
  }

  return str.split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join(' ')
}
