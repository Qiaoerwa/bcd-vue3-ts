/*
 * @Description: 
 * @Autor: fylih
 * @Date: 2022-01-06 11:18:24
 * @LastEditors: fylih
 * @LastEditTime: 2022-01-21 15:16:24
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "@typescript-eslint/no-explicit-any": ["off"],
    "suppressImplicitAnyIndexErrors": 'off',
  }
}
