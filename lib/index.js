'use strict'

module.exports = {
  rules: {
    'no-chinese-character': require('./rules/no-chinese-character')
  },
  rulesConfig: {
    'no-chinese-character': 1
  },
  configs: {
    recommended: {
      plugins: [
        'vue-i18nstring'
      ],
      rules: {
        'vue-i18nstring/no-chinese-character': 'warn'
      }
    }
  },
  processors: {
    '.vue': require('./processor')
  }
}
