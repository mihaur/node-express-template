import greeter from '../'
import assert from 'assert'
import { it as test } from 'mocha'

const same = (x, y) => assert.deepStrictEqual(x, y)

describe('index test', () => {
  test('should greet with Hello, World!', async () => {
    const response = greeter()
    same(response, { greeting: 'Hello, World!' })
  })

  test('should greet with Hello, Joe!', async () => {
    const response = greeter('Joe')
    same(response, { greeting: 'Hello, Joe!' })
  })

  test('should greet with Hello, Joe!', async () => {
    const response = greeter('joe')
    same(response, { greeting: 'Hello, Joe!' })
  })

  test('should greet with Hello, 🦉!', async () => {
    const response = greeter('🦉')
    same(response, { greeting: 'Hello, 🦉!' })
  })

  test('should throw TypeError', async () => {
    assert.throws(greeter.bind(greeter, 123), TypeError('string expected, got number'))
  })

  test('should throw TypeError', async () => {
    assert.throws(greeter.bind(greeter, null), TypeError('string expected, got object'))
  })
})
