module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js'],
  theme: {},

  // 数组即白名单式，移动端不需要 variants
  variants: [],
  plugins: [],
}
