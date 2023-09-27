const { sum } = require('./index.js')
const { describe, it, expect } = require('@jest/globals')

describe('Testing sum function', () => {
  it('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
