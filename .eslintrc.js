module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  plugins: ['prettier'],
  extends: ['standard-with-typescript', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/semi': ['error', 'always'],
    'no-return-await': 'error',
    '@typescript-eslint/return-await': 0,
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }]
  }
};
