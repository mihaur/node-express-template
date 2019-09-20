import 'dotenv/config'

const greeter = (name = process.env.GREETING) => {
  if (typeof name !== 'string') {
    throw new TypeError('string expected, got ' + typeof name)
  }
  return { greeting: `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!` }
}

module.exports = greeter
