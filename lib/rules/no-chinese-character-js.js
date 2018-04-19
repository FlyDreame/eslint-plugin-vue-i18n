'use strict'

const utils = require('../utils')
const chineseRegex = require('../utils').regex.chineseRegex
const msg = 'Using Chinese characters: {{ character }}'

module.exports = function (context) {
  return {
    'Literal': function (node) {
      utils.lintJs(node, chineseRegex, context, msg)
    }
  }
}
