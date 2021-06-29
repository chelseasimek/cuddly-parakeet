const errorLevel = 2;
module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'globals': {
    'window': true,
    'define': true,
    'require': true,
    'module': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true,
      'es6': true,
    },
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    // 'off' or 0 - turn rule off
    // 'warn' or 1 - turn rule on as a warning (doesn't affect exit code)
    // 'error' or 2 - turn rule on as an error (exit code is 1 when triggered)
    // REACT SPECIFIC ATTRIBUTES
    'react/jsx-indent-props': [1, 2], // Two space indention
    // 'react/jsx-no-undef': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    // 'react/wrap-multilines': 1,
    'react/react-in-jsx-scope': 1,
    'react/prefer-es6-class': 1,
    // 'react/jsx-no-bind': 1,
    // 'react/jsx-'boolean-value': 0,
    'no-prototype-builtins': 0,
    'no-unused-vars' : 1,
    'no-console': 1,
    'no-undef': 1,
    'indent': [errorLevel, 2],
    'linebreak-style': [errorLevel, 'unix'],
    'quotes': [errorLevel, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'semi': [errorLevel, 'always'],
    'react/jsx-closing-bracket-location': 1,
    'spaced-comment': [errorLevel, 'always'], // require space at start of comment
    'array-bracket-spacing': [errorLevel, 'always'], // require space inside array
    'space-before-blocks': [errorLevel, 'always'],
    'object-curly-spacing': [errorLevel, 'always'], // add spacing inside braces
    'react/jsx-curly-spacing': [errorLevel, 'always'], // react version of above
    'keyword-spacing': [errorLevel, { 'before': true, 'after': true }],
    'indent': [errorLevel, 2, { 'SwitchCase': 1 }],
    'key-spacing': [errorLevel, { 'afterColon': true }],
    'no-multiple-empty-lines': [errorLevel, { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
    'no-debugger': 1,
    'space-in-parens': [errorLevel, 'never'],
    'space-before-blocks': [errorLevel, 'always'],
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'no-prototype-builtins': 0
  }
};