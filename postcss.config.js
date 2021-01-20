const path = require('path')

// 修复读不到 tailwind.config.js 配置的情况
const tailwindConfigPath = path.resolve(__dirname, './tailwind.config.js')

// 为了跨平台统一，都用一样的平台插件
const PLATFORM_MAP = {
  h5: 'mp', // h5
  'mp-weixin': 'mp',
  'mp-alipay': 'mp',
  'mp-baidu': 'mp',
  'mp-toutiao': 'mp',
  'mp-qq': 'mp',
  'app-plus': 'mp', //native
}

module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    require('postcss-import')({
      resolve(id, basedir, importOptions) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3))
        } else if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2))
        } else if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1))
        }
        return id
      },
    }),
    require('autoprefixer')({
      remove: process.env.UNI_PLATFORM !== 'h5',
    }),
    require('@dcloudio/vue-cli-plugin-uni/packages/postcss'),

    require('tailwindcss')(tailwindConfigPath),
    require('postcss-uni-tailwind')({
      platform: PLATFORM_MAP[process.env.UNI_PLATFORM],
      name: process.env.UNI_PLATFORM,
    }),
  ],
}
