module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'semi': 'off',
    'linebreak-style': ['error', 'windows'],
    'require-jsdoc': 0,
    'arrow-parens': 0,
    'operator-linebreak': 'off',
  },
  extends: ['eslint:recommended', 'google'],
};
