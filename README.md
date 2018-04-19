# eslint-plugin-vue-i18n
ESLint plugin for vue i18n
# Installation

Install [ESLint](https://www.github.com/eslint/eslint) as a dev-dependency:

```sh
$ npm install --save-dev eslint
```

Install ` eslint-plugin-i18n` as a dev-dependency:

```sh
$ npm install --save-dev eslint-plugin-vue-i18nstring
```

# Configuration

Add `plugins` section to your `.eslintrc` and specify eslint-plugin-i18n as a plugin:

```json
{
  "plugins": [
    "vue-i18nstring"
  ]
}
```

Finally, enable the rules that you would like to use.

```json
{
  "rules": {
    "vue-i18nstring/no-chinese-character-vue": 1
  }
}
```