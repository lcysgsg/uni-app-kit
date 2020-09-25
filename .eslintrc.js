module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'plugin:prettier/recommended', 'prettier/vue'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    // 未使用声明，方便调试
    'no-unused-vars': 'warn',

    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        // 比起页面空格产生的影响，我还是希望代码看起来简单一点
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
  },
}
