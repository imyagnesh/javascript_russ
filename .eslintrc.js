module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier', 'prettier/babel', 'prettier/prettier', 'prettier/standard'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {},
};
