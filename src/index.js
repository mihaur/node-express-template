import 'dotenv/config'
import { allCaps } from './utils'

/**
 * @function greeter
 * @description
 * Generates a custom greeting 'Hello, Name!', where input parameter name is capitalized. If name is not given process.env.GREETING is instead as default value.
 * @summary Returns a greeting.
 *
 * @param {String} [name=process.env.GREETING] - name to append to greeting, name is capitalized
 * @returns {String} 'Hello, Name!' greeting
 * @throws {TypeError} wrong parameter type, string expected
 *
 * @example
 * // Generate default greeting (depending on process.env.GREETING)
 * const result = greeter()
 * //=> Hello, World!
 *
 * @example
 * // Greet John
 * const result = greeter('John')
 * //=> Hello, John!
 *
 * @example
 * // Greet Jane
 * const result = greeter('jane')
 * //=> Hello, Jane!
 *
 */

export default function greeter (name = process.env.GREETING) {
  if (typeof name !== 'string') {
    throw new TypeError('wrong parameter type, string expected')
  }
  return { greeting: `Hello, ${allCaps(name)}!` }
}
