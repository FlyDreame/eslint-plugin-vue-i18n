'use strict'

const utils = require('../utils')
const chineseRegex = require('../utils').regex.chineseRegex
const msg = 'Using Chinese characters: {{ character }}'

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'enforce quotes style of HTML attributes',
      category: 'recommended',
      url: ''
    }
  },

  create (context) {
    return utils.defineTemplateBodyVisitor(context, {
      'VAttribute[value!=null]' (node) {
        utils.matchRegex(node, chineseRegex, msg, context)
      },
      'VText[value!=null]' (node) {
        if (chineseRegex.exec(node.value)) {
          utils.matchRegex(node, chineseRegex, msg, context)
        }
      }
    })
  }
}
