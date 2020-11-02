module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-scss'],
  rules: {
    'unit-no-unknown': [
      true,
      {
        // uni-app
        ignoreUnits: ['rpx', 'upx'],
      },
    ],

    // 兼容 uni app 标签
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements', 'default-namespace'],
      },
    ],

    // at-rule-no-unknown
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'responsive',
          'variants',
          'screen',
          'layer',
        ],
      },
    ],
  },
}
