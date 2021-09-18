module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // bug：开启后每次新增 class 要重启服务才能生效
  // mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {},

  separator: '_',

  // 数组即白名单式
  // 移动端不需要 variants
  variants: [],
  // plugins: [],
};
