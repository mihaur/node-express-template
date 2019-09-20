import greeter from '../'
import assert from 'assert'
import { it as test } from 'mocha'

const same = (x, y) => assert.deepStrictEqual(x, y)

describe('greeting test', () => {
  test('should greet with Hello, World!', async () => {
    const response = greeter()
    same(response, { greeting: 'Hello, World!' })
  })

  test('should greet with Hello, Mars!', async () => {
    const oldGreeting = process.env.GREETING
    process.env.GREETING = 'Mars'
    const response = greeter()
    process.env.GREETING = oldGreeting
    same(response, { greeting: 'Hello, Mars!' })
  })

  test('should greet with Hello, World!', async () => {
    const response = greeter()
    same(response, { greeting: 'Hello, World!' })
  })

  test('should greet with Hello, John!', async () => {
    const response = greeter('John')
    same(response, { greeting: 'Hello, John!' })
  })

  test('should greet with Hello, John!', async () => {
    const response = greeter('john')
    same(response, { greeting: 'Hello, John!' })
  })

  test('should greet with Hello, John!', async () => {
    const response = greeter('JOHN')
    same(response, { greeting: 'Hello, John!' })
  })

  test('should greet with Hello, John Doe', async () => {
    const response = greeter('john doe')
    same(response, { greeting: 'Hello, John Doe!' })
  })

  test('should greet with Hello, 🦉!', async () => {
    const response = greeter('🦉')
    same(response, { greeting: 'Hello, 🦉!' })
  })

  test('should throw TypeError', async () => {
    assert.throws(greeter.bind(greeter, 123), TypeError('wrong parameter type, string expected'))
    assert.throws(greeter.bind(greeter, []), TypeError('wrong parameter type, string expected'))
    assert.throws(greeter.bind(greeter, {}), TypeError('wrong parameter type, string expected'))
    assert.throws(greeter.bind(greeter, null), TypeError('wrong parameter type, string expected'))
  })
})
