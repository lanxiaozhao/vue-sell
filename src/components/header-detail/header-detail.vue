<!--
 * @Author: zhaopan
 * @Date: 2020-04-29 16:58:11
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-20 16:31:55
 -->
<!-- header-detail -->
<template>
<transition name="fade">
  <div class="detail" v-show="visiable">
    <div class="detail-content">
      <div class="detail-main">
        <h1 class="name">{{seller.name}}</h1>
        <div class="star-wrapper">
          <star :size="48" :score="seller.score"></star>
        </div>
        <div class="title">
        <div class="line"></div>
        <div class="text">优惠信息</div>
        <div class="line"></div>
        </div>
        <ul v-if="seller.supports" class="supports">
          <li v-for="(item, index) in seller.supports" :key="index" class="supports-item">
            <support-ico :size=2 :type="seller.supports[index].type" class="support-ico"></support-ico>
            <span class="support-desc">{{seller.supports[index].description}}</span>
          </li>
        </ul>
        <div class="title">
          <div class="line"></div>
          <div class="text">商家公告</div>
          <div class="line"></div>
        </div>
        <div class="bulletin">
          <p class="content">{{seller.bulletin}}</p>
        </div>
      </div>
    </div>
    <div class="detail-close" @click="hide">
      <i class="icon-close"></i>
    </div>
  </div>
</transition>
</template>

<script>
import Star from 'components/star/star'
import SupportIco from 'components/support-ico/support-ico'
export default {
name: 'header-detail',
props: {
  seller: {
    type: Object,
    default() {
      return {}
    }
  }
},
components: {
  Star,
  SupportIco
},
data() {
  return {
    visiable: false
  }
},
methods: {
  show() {
    this.visiable = true
  },
  hide() {
    this.visiable = false
  }
}
}
</script>
<style lang='stylus' scoped>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin.styl'
.detail
  position: fixed
  top: 0
  right: 0
  width: 100%
  height: 100%
  opacity: 1
  overflow: auto
  z-index: 100
  background-color: $color-background-s
  color: rgb(255, 255, 255)
  backdrop-filter: blur(5px) /* 在透明元素后添加模糊效果，filter是整个模糊，这里如果用filter可以新加一个空白层设置filter的值来避免文字会被模糊 */
  &.fade-enter-active,
  &.fade-leave-active
    transition: all 0.5s
  &.fade-enter,
  &.fade-leave-to
    opacity: 0
  .detail-content
    min-height: 100%
    width: 100%
    .detail-main
      padding: 64px 36px 64px 36px
      .name
        font-size: 16px
        font-weight: 700
        line-height: 16px
        text-align: center
      .star-wrapper
        margin 16px 0 28px 0
        text-align: center
        height: 24px
      .title
        margin: 0 0 24px 0
        display: flex
        .line
          flex: 1
          width: 112px
          position: relative
          top: -6px
          border-bottom: 1px solid rgba(255, 255, 255, 0.2)
        .text
          padding: 0 12px
          font-size: 14px
          font-weight: 700
          line-height: 14px
      .supports
        padding: 0 12px 28px 12px
        .supports-item
          margin-bottom: 12px
          display: flex
          align-items: center
          font-size: 0
          &:last-child
            margin-bottom: 0
          .support-ico
            margin-right: 6px
          .support-desc
            font-size: 12px
            font-weight: 200
            line-height: 12px
      .bulletin
        padding: 0 12px
        .content
          font-size: 12px
          font-weight: 200
          line-height: 24px
  .detail-close
    position: relative
    margin-top: -64px
    text-align: center
    clear: both
    .icon-close
      font-size: 32px
      color: rgba(255, 255, 255, 0.5)
</style>
