/*
 * @Descripttion: 
 * @version: 
 * @Author: zhaopan
 * @Date: 2020-04-28 15:00:09
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-04-28 15:25:48
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'indent': 0
  }
}
