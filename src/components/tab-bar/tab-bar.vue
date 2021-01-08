<!--
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2020-07-20 16:30:37
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-23 20:15:44
-->
<!-- tab-bar -->
<template>
<div class="tab">
  <cube-tab-bar v-model="selectedLabel"
                ref="tab"
                :showSlider="true"
                :useTransition="false"
                :data="tabs"
                class="border-bottom-1px">
  </cube-tab-bar>
  <div class="tab-slide-container">
    <cube-slide ref="slide"
                :data="tabs"
                :loop="false"
                :auto-play="false"
                :show-dots="false"
                :initial-index="index"
                :options="slideOptions"
                @change="changePage"
                @scroll="onScroll">
      <cube-slide-item v-for="tab in tabs"
                      :key="tab.label">
        <component :is="tab.components" :data="tab.data"></component>
      </cube-slide-item>
    </cube-slide>
  </div>
</div>
</template>

<script>
export default {
name: 'tab-bar',
data() {
  return {
    index: this.initialIndex,
    slideOptions: {
      listenScroll: true,
      probeType: 3,
      directionLockThreshold: 0
    }
  }
},
props: {
  tabs: {
    type: Array,
    dafault() {
      return []
    }
  },
  initialIndex: {
    type: Number,
    default: 0
  }
},
computed: {
  selectedLabel: {
    get() {
      return this.tabs[this.index].label
    },
    set(newVal) {
      this.index = this.tabs.findIndex((value) => {
        return value.label === newVal
      })
    }
  }
},
methods: {
  changePage(current) {
    // change事件可以获取当前页面的索引值，将当前页面的索引值赋给this.index, selectedLabel的值以来index因此会重新计算，然后tab标签切换
    this.index = current
  },
  onScroll(pos) {
    // 需要在scroll配置中开启监听
    const x = Math.abs(pos.x)
    const tabItemWidth = this.$refs.tab.$el.clientWidth
    const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
    const deltaX = x / slideScrollerWidth * tabItemWidth
    this.$refs.tab.setSliderTransform(deltaX)
  }
}
}
</script>
<style lang='stylus' scoped>
/* @import url(); 引入css类 */
@import '~common/stylus/variable.styl'
.tab
  display: flex
  height: 100%
  flex-direction: column
  >>> .cube-tab
    height: 40px
    line-height: 40px
    font-size: 14px
    color: rgb(77, 85, 93)
    padding: 0
  >>> .cube-tab_active
    color: $color-red
  >>> .cube-tab-bar-slider {
    background-color: $color-red
  }
  .tab-slide-container {
    flex: 1
    overflow: hidden
  }
</style>
