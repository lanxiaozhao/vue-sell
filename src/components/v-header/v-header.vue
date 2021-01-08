<!--
 * @Author: zhaopan
 * @Date: 2020-04-28 17:34:02
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-20 16:31:38
 -->
<!--  -->
<template>
<div class="header">
  <div class="content-wrapper">
    <div class="avatar">
      <img :src="seller.avatar">
    </div>
    <div class="content">
      <div class="title">
        <span class="brand"></span>
        <span class="name">{{seller.name}}</span>
      </div>
      <div class="description">
        {{seller.description}}/{{seller.deliveryTime}}分钟送达
      </div>
      <div v-if="seller.supports" class="supports">
        <support-ico :size=1 :type="seller.supports[0].type"></support-ico>
        <span class="text">{{seller.supports[0].description}}</span>
      </div>
    </div>
    <div v-if="seller.supports" class="support-count" @click="showDetail">
      <span class="count">{{seller.supports.length}}个</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
  <div class="bulletin-wrapper">
    <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
    <i class="icon-keyboard_arrow_right"></i>
  </div>
  <div class="background">
    <img :src="seller.avatar" width="100%" height="100%">
  </div>
</div>
</template>

<script>
import SupportIco from 'components/support-ico/support-ico'
export default {
name: 'v-header',
props: {
  seller: {
    type: Object,
    default() {
      return {}
    }
  }
},
components: {
  SupportIco
},
methods: {
  showDetail() {
    this.HeaderDetailCom = this.HeaderDetailCom || this.$createHeaderDetail({
      $props: {
        seller: 'seller'
      }
    })
    this.HeaderDetailCom.show()
  }
},
data() {
  return {

  }
},
// 生命周期 - 创建完成（访问当前this实例）
created() {

},
// 生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style lang='stylus' scoped>
@import '~common/stylus/mixin.styl'
@import '~common/stylus/variable.styl'
.header
  position: relative
  overflow: hidden
  background-color: $color-background-ss
  .content-wrapper
    padding: 24px 12px 18px 24px
    display: flex
    align-items: center
    position: relative
    .avatar
      width: 64px
      margin-right: 16px
      flex: 0 0 64px
      img
        width: 64px
        height: 64px
        border-radius: 2px
        background-repeat: no-repeat
    .content
      padding: 2px 0 2px 0
      flex: 1
      .title
        align-items: center
        font-size: 0
        display: flex
        .brand
          display: inline-block
          width: 30px
          height: 18px
          margin-right: 6px
          bg-image('brand')
          background-repeat: no-repeat
          background-size: 30px 18px
        .name
          display: inline-block
          font-size: 16px
          color: rgb(255, 255, 255)
          font-weight: bold
          line-height: 18px
      .description
        margin: 8px 0 10px 0
        font-size: 16px
        color: rgb(255, 255, 255)
        font-weight: 200
        line-height: 12px
      .supports
        align-items: center
        display: flex
        .text
          font-size: 10px
          color: rgb(255, 255, 255)
          font-weight: 200
          line-height: 12px
          margin-left: 4px
    .support-count
      font-size: 10px
      font-weight: 200
      color: rgb(255,255,255)
      line-height: 12px
      border-radius: 12px
      align-items: center
      padding: 7px 8px 7px 8px
      background-color: rgba(0, 0, 0, 0.2)
      position: absolute
      right: 12px
      bottom: 14px
      .count
        margin-right: 2px
  .bulletin-wrapper
    height: 28px
    padding: 0 12px 0 12px
    align-items: center
    font-size: 0
    background-color: $color-background-sss
    display: flex
    .bulletin-title
      width: 22px
      height: 12px
      flex: 0 0 22px
      bg-image('bulletin')
      background-repeat: no-repeat
      background-size: 22px 12px
      margin-right: 4px
    .bulletin-text
      font-size: 10px
      font-weight: 200
      color: rgb(255,255,255)
      line-height: 28px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      flex: 1
    .icon-keyboard_arrow_right
      flex: 0 0 10px
      width: 10px
      font-size: 10px
      color: rgb(255,255,255)
  .background
    position: absolute
    top: 0
    right: 0
    width: 100%
    height: 100%
    z-index: -1
    filter: blur(5px)
</style>
