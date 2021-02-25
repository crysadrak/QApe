module.exports = {
  'extends': ['eslint:recommended', 'prettier'],
  'parser': 'babel-eslint',
  'rules': {
    'prettier/prettier': [
      'error', {
        singleQuote: true,
        semi: true,
        tabWidth: 4,
        printWidth: 110,
        trailingComma: 'es5',
        jsxBracketSameLine: true
      }
    ],

    'no-console': 0,
  },
  'plugins': [
    'prettier',
    'jest',
    'jasmine'
  ],
  'settings': {
    'ecmascript': 2015,
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 6,
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
    'jasmine': true,
    'jest/globals': true
  },
};
