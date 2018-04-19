'use strict'

module.exports = {
  rules: {
    'no-chinese-character-vue': require('./rules/no-chinese-character-vue'),
    'no-chinese-character-js': require('./rules/no-chinese-character-js')
  },
  rulesConfig: {
    'no-chinese-character-vue': 1,
    'no-chinese-character-js': 1
  },
  configs: {
    recommended: {
      plugins: [
        'vue-i18nstring'
      ],
      rules: {
        'vue-i18nstring/no-chinese-character-vue': 'warn',
        'vue-i18nstring/no-chinese-character-js': 'warn'
      }
    }
  },
  processors: {
    '.vue': require('./processor')
  }
}
