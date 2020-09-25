## TODOs
- [ ] 确定 uni-app 的全平台更新是稳定可行的

## Features
- uniapp api 智能提示
- uniapp tag 属性提示
- tailwindcss

## 开发须知

### [Vue CLI 环境变量和模式](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E5%92%8C%E6%A8%A1%E5%BC%8F)

项目配置以后都会使用这种方式配置

之所以使用这种模式，1 是因为编译阶段就可以把不同环境下的配置固定下来， 2 是这样做很难再发生配置忘记修改的问题

### [使用cli创建项目和使用HBuilderX可视化界面创建项目有什么区别](https://uniapp.dcloud.net.cn/quickstart?id=%e4%bd%bf%e7%94%a8cli%e5%88%9b%e5%bb%ba%e9%a1%b9%e7%9b%ae%e5%92%8c%e4%bd%bf%e7%94%a8hbuilderx%e5%8f%af%e8%a7%86%e5%8c%96%e7%95%8c%e9%9d%a2%e5%88%9b%e5%bb%ba%e9%a1%b9%e7%9b%ae%e6%9c%89%e4%bb%80%e4%b9%88%e5%8c%ba%e5%88%ab)

使用 cli 创建项目后， 编译器版本需要手动更新。（TODO：具体更新流程待测试）

可以固定使用项目完结时的编译器版本，保证项目稳定。

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
