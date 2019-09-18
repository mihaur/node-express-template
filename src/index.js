import 'dotenv/config'

const greeter = (name = process.env.GREETING) => {
  if (typeof name !== 'string') return { }
  return { greeting: `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!` }
}

module.exports = greeter
