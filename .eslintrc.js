module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  globals: {
    wx: 'readonly', // wx mini program
    my: 'readonly', // ali mini program
    uni: 'readonly', // uni
    plus: 'readonly', // uni
    weex: 'readonly', // uni
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  rules: {
    // 未使用声明，方便调试
    'no-unused-vars': 'warn',

    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-this-alias': ['off'],

    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        // 比起页面空格产生的影响，我还是希望代码看起来简单一点
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
  },
};
