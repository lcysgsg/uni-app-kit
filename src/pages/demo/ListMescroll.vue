<template>
  <view class="bg-red-300 p-4">
    <MescrollBody
      ref="mescrollRef"
      :down="mescrollDownOption"
      :up="mescrollUpOption"
      @init="mescrollInit"
      @down="mescrollDownCallback"
      @up="mescrollUpCallback"
    >
      <view v-for="(item, index) in list" :key="index" class="bg-blue-300 p-4">
        {{ item.name }}
      </view>
    </MescrollBody>
  </view>
</template>

<script>
import MescrollBody from 'mescroll-uni/mescroll-body.vue'
import MescrollMixin from '@/common/js/uni/mescroll/mescroll-mixins'

export default {
  components: {
    MescrollBody,
  },
  mixins: [MescrollMixin],
  data() {
    return {
      list: [],
      mock: {
        list: [
          { name: 'janue' },
          { name: 'nick' },
          { name: 'kity' },
          { name: 'janue1' },
          { name: 'nick1' },
          { name: 'kity1' },
          { name: 'janue2' },
          { name: 'nick2' },
          { name: 'kity2' },
          { name: 'janue3' },
          { name: 'nick3' },
          { name: 'kity3' },
        ],
        total: 36,
      },
    }
  },
  methods: {
    mescrollUpCallback(page) {
      this.ajaxList(page)
    },
    ajaxList(page) {
      let params = {
        page: page.num,
        list_rows: page.size,
      }

      const curPageData = this.mock.list
      const curPageLen = curPageData.length
      const totalPage = this.mock.total

      page.num === 1
        ? (this.list = curPageData)
        : this.list.push(...curPageData)
      if (page.num === 1) this.mescroll.endDownScroll()
      this.mescroll.endBySize(curPageLen, totalPage)
    },
  },
}
</script>

<style lang="scss" scoped></style>
