## icon font

[DEMO（./example/demo_index.html）](./example/demo_index.html)

[uni-app iconfont 介绍及注意事项](https://uniapp.dcloud.net.cn/frame?id=%e5%ad%97%e4%bd%93%e5%9b%be%e6%a0%87)。为了全平台使用，只使用 base64 的方式。 fork 千牛图标库， 理由图标具备线框和实心， 命名规范。

数据更新方式暂时为： 从 [iconfont.cn](https://www.iconfont.cn/) 下载项目后，手动拷出 base64 部分替换 [iconfont.css](./iconfont.css) 中的 base64 部分。

### Features
- 179个图标，纯 base64 大小 20kb+，总共 32kb
- 预置效果, fork fontawesome v5
    - `.iconfont-spin` 无缝旋转
    - `.iconfont-pulse` 分阶段旋转, 原理是 `steps(8)`
    - `.iconfont-rotate-90`  旋转90度
    - `.iconfont-rotate-180` 旋转180度
    - `.iconfont-rotate-270` 旋转270度
    - `.iconfont-flip-horizontal` 水平翻转
    - `.iconfont-flip-vertical`   垂直翻转
    - `.iconfont-flip-both`       水平、垂直翻转

