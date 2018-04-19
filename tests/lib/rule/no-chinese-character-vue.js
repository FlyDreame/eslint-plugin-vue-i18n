'use strict'

const RuleTester = require('eslint').RuleTester
const rule = require('../../../lib/rules/no-chinese-character-vue')

const tester = new RuleTester({
  parser: 'vue-eslint-parser',
  parserOptions: { ecmaVersion: 2015 }
})

tester.run('no-chinese-character-vue', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: `
        <template><div class="foo">66666</div></template>
      `
    },
    {
      filename: 'test2.vue',
      code: `
        <template><div class="foo" title="6666"></div></template>
      `
    }
  ],
  invalid: [
    {
      filename: 'test.vue',
      code: `
        <template><div class="foo" >哈哈哈哈</div></template>
      `,
      errors: [{ message: 'Using Chinese characters: 哈哈哈哈' }]
    },
    {
      filename: 'test2.vue',
      code: `
        <template><div class="foo" title="哈哈哈哈哈"></div></template>
      `,
      errors: [{ message: 'Using Chinese characters: 哈哈哈哈哈' }]
    }
  ]
})
