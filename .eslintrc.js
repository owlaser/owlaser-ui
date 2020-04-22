module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0, //函数定义时括号前面要不要有空格
    // 'func-call-spacing': ['error', 'always', { allowNewlines: true }]
    // 'eol - last': ['never'],
    'no-trailing-spaces': 1
  }
}