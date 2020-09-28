const MescrollMixin = {
  // components: { // 非H5端无法通过mixin注册组件, 只能在main.js中注册全局组件或具体界面中注册
  // 	MescrollUni,
  // 	MescrollBody
  // },
  data() {
    return {
      mescroll: null, //mescroll实例对象

      // 组件上使用这两个值， 覆盖 mescroll-uni-option.js
      mescrollDownOption: {
        // 其他down的配置参数也可以写,这里只展示了常用的配置:
        textInOffset: '下拉刷新', // 下拉的距离在offset范围内的提示文本
        textOutOffset: '释放更新', // 下拉的距离大于offset范围的提示文本
        textLoading: '加载中 ...', // 加载中的提示文本
        textSuccess: '加载成功', // 加载成功的文本
        textErr: '加载失败', // 加载失败的文本
        beforeEndDelay: 100, // 延时结束的时长 (显示加载成功/失败的时长)
        offset: 80, // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
        native: false, // 是否使用系统自带的下拉刷新; 默认false; 仅在mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
      },
      mescrollUpOption: {
        // 其他up的配置参数也可以写,这里只展示了常用的配置:
        textLoading: '加载中 ...', // 加载中的提示文本
        textNoMore: '-- 没有更多数据了 --', // 没有更多数据的提示文本
        offset: 150, // 距底部多远时,触发upCallback,仅mescroll-uni生效 ( mescroll-body配置的是pages.json的 onReachBottomDistance )
        toTop: {
          // 回到顶部按钮,需配置src才显示
          src: require('./mescroll-totop.png'), // 图片路径 (建议放入static目录, 如 /static/img/mescroll-totop.png )
          offset: 1000, // 列表滚动多少距离才显示回到顶部按钮,默认1000px
          right: 20, // 到右边的距离, 默认20 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
          bottom: 120, // 到底部的距离, 默认120 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
          width: 72, // 回到顶部图标的宽度, 默认72 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
        },
        empty: {
          use: true, // 是否显示空布局
          icon: require('./mescroll-empty.png'), // 图标路径 (建议放入static目录, 如 /static/img/mescroll-empty.png )
          tip: '~ 暂无数据 ~', // 提示
        },
      },
    }
  },
  // 注册系统自带的下拉刷新 (配置down.native为true时生效, 还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
  onPullDownRefresh() {
    this.mescroll && this.mescroll.onPullDownRefresh()
  },
  // 注册列表滚动事件,用于判定在顶部可下拉刷新,在指定位置可显示隐藏回到顶部按钮 (此方法为页面生命周期,无法在子组件中触发, 仅在mescroll-body生效)
  onPageScroll(e) {
    this.mescroll && this.mescroll.onPageScroll(e)
  },
  // 注册滚动到底部的事件,用于上拉加载 (此方法为页面生命周期,无法在子组件中触发, 仅在mescroll-body生效)
  onReachBottom() {
    this.mescroll && this.mescroll.onReachBottom()
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll
      this.mescrollInitByRef() // 兼容字节跳动小程序
    },
    // 以ref的方式初始化mescroll对象 (兼容字节跳动小程序)
    mescrollInitByRef() {
      if (!this.mescroll || !this.mescroll.resetUpScroll) {
        let mescrollRef = this.$refs.mescrollRef
        if (mescrollRef) this.mescroll = mescrollRef.mescroll
      }
    },
    // 下拉刷新的回调 (mixin默认resetUpScroll)
    mescrollDownCallback() {
      if (this.mescroll.optUp.use) {
        this.mescroll.resetUpScroll()
      } else {
        setTimeout(() => {
          this.mescroll.endSuccess()
        }, 500)
      }
    },
    // 上拉加载的回调
    mescrollUpCallback() {
      // mixin默认延时500自动结束加载
      setTimeout(() => {
        this.mescroll.endErr()
      }, 500)
    },
  },
  mounted() {
    this.mescrollInitByRef() // 兼容字节跳动小程序, 避免未设置@init或@init此时未能取到ref的情况
  },
}

export default MescrollMixin
