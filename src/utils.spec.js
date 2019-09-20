import assert from 'assert'
import { it as test } from 'mocha'
import { allCaps } from './utils'

describe('allCaps unit tests', () => {
  test('should return empty string', async () => {
    assert.strictEqual(allCaps(''), '')
  })

  test('should return Test', async () => {
    assert.strictEqual(allCaps('test'), 'Test')
  })

  test('should return Test', async () => {
    assert.strictEqual(allCaps('TEST'), 'Test')
  })

  test('should return Bim Bam', async () => {
    assert.strictEqual(allCaps('BIM bam'), 'Bim Bam')
  })

  test('should return Bim Bam', async () => {
    assert.strictEqual(allCaps('bim BAM'), 'Bim Bam')
  })

  test('should throw TypeError', async () => {
    assert.throws(allCaps.bind(allCaps, 123), TypeError('wrong parameter type, string expected'))
    assert.throws(allCaps.bind(allCaps, []), TypeError('wrong parameter type, string expected'))
    assert.throws(allCaps.bind(allCaps, {}), TypeError('wrong parameter type, string expected'))
    assert.throws(allCaps.bind(allCaps, null), TypeError('wrong parameter type, string expected'))
  })
})
