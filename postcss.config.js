const postcss = require('postcss');
const path = require('path');

// 修复读不到 tailwind.config.js 配置的情况
const tailwindConfigPath = path.resolve(__dirname, './tailwind.config.js');

// 为了跨平台统一，都用一样的平台插件
const PLATFORM_MAP = {
  h5: 'mp', // h5
  'mp-weixin': 'mp',
  'mp-alipay': 'mp',
  'mp-baidu': 'mp',
  'mp-toutiao': 'mp',
  'mp-qq': 'mp',
  'app-plus': 'mp', //native
};

const pluginTailwind4uniapp = postcss.plugin('postcss-tailwind4uniapp', () => (root) => {
  // (postcss-uni-tailwind)[https://www.npmjs.com/package/postcss-uni-tailwind]
  // 替换css语法以兼容各平台
  function isSupportedRule(selector) {
    return !selector.includes(':hover');
  }
  const platform = PLATFORM_MAP[process.env.UNI_PLATFORM];
  const rule = {
    h5: ['px2rem'],
    mp: ['px2rpx', 'rem2rpx'],
    native: ['px2pt', 'rem2pt', 'rpx2pt', 'vw2%', 'vh2%'],
  };
  const units = {
    px2rem: 1 / 37.5,
    px2rpx: 1,
    rem2rpx: 37.5,
    px2pt: 0.22,
    rpx2pt: 0.75,
    rem2pt: 28.125,
    'vw2%': 1,
    'vh2%': 1,
  };
  const threshold = {
    h5: 0,
    mp: 0,
    native: 0,
  };

  const covertRule = rule[platform].map((v) => {
    const _s = v.split('2');
    return {
      key: _s[0],
      covert: _s[1],
    };
  });
  // 0915 不直接使用不影响，通过 @apply 可以使用
  // 全局通用规则
  // 由于小程序不支持/ .5 :等特殊字符，这类型字符将会做如下转换
  // : 替换成 _
  // .5 替换成 _half
  // / 替换成 _
  // root.walkRules((postrule) => {
  // 规则替换
  // postrule.walkDecls((decl) => {
  //   covertRule.forEach((v) => {
  //     const _times = units[`${v.key}2${v.covert}`];
  //     const _regx = new RegExp(`([\\d\\.]+)${v.key}`);
  //     if (_regx.test(decl.value) && typeof _times === 'number') {
  //       const _m = decl.value.match(_regx);
  //       if (_m[1] > threshold[platform]) {
  //         decl.value = decl.value.replace(_m[0], `${_m[1] * _times}${v.covert}`);
  //       }
  //     }
  //   });
  //   // PX to px
  //   if (/PX$/.test(decl.value)) {
  //     const _m = decl.value.match(/([\d.]+)PX/);
  //     decl.value = decl.value.replace(_m[0], parseFloat(_m[1]) + 'px');
  //   }
  // });
  // 替换:为_
  // if (postrule.selector.includes('\\:')) {
  //   postrule.selectors = postrule.selectors.map((v) => v.replace(/\\:/g, '_'));
  // }
  // 替换.为dot
  // if (postrule.selector.includes('\\.')) {
  //   postrule.selectors = postrule.selectors.map((v) => v.replace(/\\\./g, 'dot'));
  // }
  // // 替换/为on
  // if (postrule.selector.includes('\\/')) {
  //   postrule.selectors = postrule.selectors.map((v) => v.replace(/\\\//g, 'on'));
  // }
  // });
  if (platform === 'mp') {
    root.walkRules((postrule) => {
      if (postrule.parent.name === 'media') {
        postrule.parent.remove();
      }

      if (postrule.selector.includes(':not(template) ~ :not(template)')) {
        postrule.selector = postrule.selector.replace(':not(template) ~ :not(template)', 'view + view');
      }
      if (postrule.selector.includes(':not([hidden]) ~ :not([hidden])')) {
        postrule.selector = postrule.selector.replace(':not([hidden]) ~ :not([hidden])', 'view + view');
      }

      if (postrule.selector.includes('*')) {
        postrule.selector = postrule.selector.replace('*', 'view');
      }

      if (postrule.selector.includes('*::before')) {
        postrule.selector = postrule.selector.replace('*::before', 'view::before');
      }

      if (postrule.selector.includes('*::after')) {
        postrule.selector = postrule.selector.replace('*::after', 'view:after');
      }

      // if (!isSupportedRule(postrule.selector)) {
      //   postrule.remove();
      // }

      postrule.walkDecls((decl) => {
        if (decl.prop === 'visibility') {
          switch (decl.value) {
            case 'hidden':
              decl.replaceWith(decl.clone({ value: 'collapse' }));
              return;
          }
        }

        if (decl.prop === 'vertical-align') {
          switch (decl.value) {
            case 'middle':
              decl.replaceWith(decl.clone({ value: 'center' }));
              return;
          }
        }
      });
    });
  }
});

module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    require('postcss-import')({
      resolve(id, basedir, importOptions) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3));
        } else if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2));
        } else if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1));
        }
        return id;
      },
    }),
    require('autoprefixer')({
      remove: process.env.UNI_PLATFORM !== 'h5',
    }),
    require('@dcloudio/vue-cli-plugin-uni/packages/postcss'),

    require('tailwindcss')(tailwindConfigPath),
    pluginTailwind4uniapp,
  ],
};
