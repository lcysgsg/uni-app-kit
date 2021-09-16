# uni-app-kit

## TODO

- [ ] 请求库
  - [axios](https://www.npmjs.com/package/axios) + [axios-adapter-uniapp](https://www.npmjs.com/package/axios-adapter-uniapp)
- [ ] `LazyImage` 图片组件，统一行为

## 特性

- 支持 TypeScript
- postcss
- [tailwindcss](https://tailwindcss.com/)
- [openapi-gen](https://www.npmjs.com/package/openapi-gen)
- eslint, stylelint, prettier

## 开始

1. 安装依赖 `$ yarn`

2. 运行 `$ yarn dev:h5` (package.json -> scripts)

## FAQ

### 微信小程序报错 `unexpected character`

html attribute 内容过长被 prettier 换行时，在小程序中无法解析。类似：

如下列写法会报错

```html
<view
  class="
        bg-gray-800
        p-1
        rounded-full
        text-gray-400
        hover:text-white
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
    "
>
  <image class="logo" src="../../static/logo.png"></image>
  <view>
    <text class="title">{{ title }}</text>
  </view>
</view>
```

```
[ WXML 文件编译错误] ./pages/index/index.wxml
 unexpected character `
`
  1 | <view class="
> 2 |     bg-gray-800
    | ^
  3 |     p-1
  4 |     rounded-full
  5 |     text-gray-400
at files://pages/index/index.wxml#2
```

uniapp 编译时没有做压缩，prettier 亦无法设置一个属性一行代码。当前应对如下：

1. prettier `printWidth=120`——单一属性超长情况较少
2. 集合成单个 class
3. [classnames](https://www.npmjs.com/package/classnames)
