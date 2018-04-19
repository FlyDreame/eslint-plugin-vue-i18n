'use strict'

const RuleTester = require('eslint').RuleTester
const rule = require('../../../lib/rules/no-chinese-character-js')

const tester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 }
})

tester.run('no-chinese-character-js', rule, {
  valid: [
    {
      filename: 'test.js',
      code: `
        var a = '6666666'
      `
    }
  ],
  invalid: [
    {
      filename: 'test.js',
      code: `
        var a = '哈哈哈哈哈'
      `,
      errors: [{ message: 'Using Chinese characters: 哈哈哈哈哈' }]
    }
  ]
})
