'use strict'

const regex = require('./regex')

module.exports = {
  /**
   * Register the given visitor to parser services.
   * If the parser service of `vue-eslint-parser` was not found,
   * this generates a warning.
   *
   * @param {RuleContext} context The rule context to use parser services.
   * @param {Object} templateBodyVisitor The visitor to traverse the template body.
   * @param {Object} scriptVisitor The visitor to traverse the script.
   * @returns {Object} The merged visitor.
   */
  defineTemplateBodyVisitor (context, templateBodyVisitor, scriptVisitor) {
    if (context.parserServices.defineTemplateBodyVisitor == null) {
      context.report({
        loc: { line: 1, column: 0 },
        message: 'Use the latest vue-eslint-parser. See also https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error'
      })
      return {}
    }
    return context.parserServices.defineTemplateBodyVisitor(templateBodyVisitor, scriptVisitor)
  },

  regex,

  matchRegex (node, regex, msg, context) {
    if (regex.exec(node.value)) {
      context.report({
        node: node,
        loc: node.value.loc,
        message: msg,
        data: {
          character: node.value
        }
      })
    }
  }
}
