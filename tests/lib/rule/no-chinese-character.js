'use strict'

const RuleTester = require('eslint').RuleTester
const rule = require('../../../lib/rules/no-chinese-character')

const tester = new RuleTester({
  parser: 'vue-eslint-parser',
  parserOptions: { ecmaVersion: 2015 }
})

tester.run('no-chinese-character', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: `
        <template><div class="foo">66666</div></template>
      `
    }
  ],
  invalid: [
    {
      filename: 'test.vue',
      code: `
        <template><div class="foo">哈哈哈哈</div></template>
      `,
      errors: [{ message: 'Using Chinese characters' }]
    }
  ]
})
