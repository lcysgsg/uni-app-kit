## TODOs

## Features

- axios，靠一个 axios 的 uni adapter 实现——[axios-adapter-uniapp](https://www.npmjs.com/package/axios-adapter-uniapp)
- 集成 [tailwindcss](https://tailwindcss.com/)
- [开发时的智能提示](#智能提示)

## 目录结构

```
|-- root
    |-- .editorconfig       # 可帮助维护跨ide、编辑器时的代码风格统一
    |-- .env                # 环境变量，通用变量
    |-- .env.development    # 环境变量，开发环境变量
    |-- .env.production     # 环境变量，生产环境变量
    |-- .eslintrc.js        # 配置文件，eslint
    |-- .gitignore          # 配置文件，git 忽略规则
    |-- .prettierrc         # 配置文件，prettier
    |-- babel.config.js     # 配置文件，babel
    |-- package.json
    |-- postcss.config.js   # 配置文件， postcss
    |-- README.md
    |-- tailwind.config.js  # 配置文件， tailwindcss
    |-- tsconfig.json
    |-- vue.config.js
    |-- yarn.lock
    |-- .vscode
    |   |-- settings.json
    |-- docs
    |-- public
    |   |-- index.html
    |-- src
        |-- App.vue
        |-- main.js
        |-- manifest.json
        |-- pages.json
        |-- uni.scss
        |-- common          # 公用资源文件
        |   |-- js
        |   |   |-- calcDistance.js
        |   |   |-- dayjs.js
        |   |   |-- raf.js
        |   |   |-- axios
        |   |   |-- uni     # uni 专用库
        |   |       |-- mescroll
        |   |-- styles
        |       |-- index.scss
        |       |-- iconfont
        |-- components
        |   |-- jyf-parser  # 富文本解析组件
        |   |-- LazyImage   # 图片懒加载组件
        |-- pages           # 业务页面文件存放的目录
        |   |-- index
        |       |-- Index.vue
        |-- static          # 存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
```

## 开发须知

### 版本更新

**请在 lock 文件中查看当前版本号——这就是为什么要上传 lock 文件的原因**

**更新与否取决于项目和更新日志**

例如 uni-app 编译器有了更新， 它会提示运行 `$ npm update` 更新依赖包

如果是使用 yarn 那么就是 `$ yarn upgrade`

可能会注意到， 运行完后 `yarn.lock` 发生了变动， `package.json` 中的 `dep...` 和 `devDep...` 并没有更新成相应的版本号，这是正常的，是 yarn 设计如此。 可以在 [yarn upgrade](https://classic.yarnpkg.com/en/docs/cli/upgrade) 和 [Yarn Upgrade Doesn't Update Package.json](https://github.com/yarnpkg/yarn/issues/3266) 里看到介绍和相应的讨论。

有的人讨厌这个反人类的设计，所以也有一些办法检查并更新 `package.json` 中依赖项的版本号。对我来说这事不重要，所以理解后就不在意了。

目前大部分遵循 GNU 命名规范，理论上来说， 版本号里最前的一位也就是主版本号（Major）不变化都是可以放心使用的， 所以默认安装的包版本前面都会带上 `^` 符号

因此，在 `package.json` 中的依赖项对应的版本符号是有含义的，代表着包可允许的使用的版本指定范围，yarn 只是根据规则来应用而已，简单举例来说：

1. **^1.0.0**

- 版本 >=1.0.0
  - 版本 < 2.0.0

2. **~1.0.0**
   - 版本 >= 1.0.0
   - 版本 < 1.1.0

### [Vue CLI 环境变量和模式](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E5%92%8C%E6%A8%A1%E5%BC%8F)

项目配置以后都会使用这种方式配置

之所以使用这种模式，1 是因为编译阶段就可以把不同环境下的配置固定下来， 2 是这样做很难再发生配置忘记修改的问题

### [使用 cli 创建项目和使用 HBuilderX 可视化界面创建项目有什么区别](https://uniapp.dcloud.net.cn/quickstart?id=%e4%bd%bf%e7%94%a8cli%e5%88%9b%e5%bb%ba%e9%a1%b9%e7%9b%ae%e5%92%8c%e4%bd%bf%e7%94%a8hbuilderx%e5%8f%af%e8%a7%86%e5%8c%96%e7%95%8c%e9%9d%a2%e5%88%9b%e5%bb%ba%e9%a1%b9%e7%9b%ae%e6%9c%89%e4%bb%80%e4%b9%88%e5%8c%ba%e5%88%ab)

使用 cli 创建项目后， 编译器版本需要手动更新。（TODO：具体更新流程待测试）

可以固定使用项目完结时的编译器版本，保证项目稳定。

### 智能提示

关于 uniapp 的智能提示，总的有3点。

- template 中的 uniapp 代码片段

  - [ ] 需要一份 User Snippet，还没想好怎么共享

- template 中，uniapp 的标签、属性提示
  - 依靠 `@dcloudio/uni-helper-json`
- uniapp api 的提示
  - 依靠 `@dcloudio/types`

关于 tailwindcss 的智能提示，一定要用官方的扩展 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
