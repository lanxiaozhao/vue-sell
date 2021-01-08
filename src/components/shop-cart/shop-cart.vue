<!--
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2020-07-24 18:41:28
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-24 20:13:38
-->
<!-- shop-cart -->
<template>
<div class="shop-cart">
  <div class="shop-cart-content">
    <div class="conten-left">
      <div class="logo-wrapper">
        <div class="logo">
          <i class="icon-shopping_cart"></i>
        </div>
        <div class="num" v-show="0">
          <bubble :count=0></bubble>
        </div>
      </div>
      <div class="price">
        ￥0
      </div>
      <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
    </div>
    <div class="content-right">
      <div class="no-enough">
        ￥{{minPrice}}元起送
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Bubble from 'components/bubble/bubble'
export default {
name: 'shop-cart',
props: {
  deliveryPrice: {
    type: Number,
    default: 0
  },
  minPrice: {
    type: Number,
    default: 0
  },
  selectedFood: {
    type: Object,
    default() {
      return {}
    }
  }
},
components: {
  Bubble
}
}
</script>
<style lang='stylus' scoped>
/* @import url(); 引入css类 */
@import "~common/stylus/mixin"
@import "~common/stylus/variable"
.shop-cart
  height: 100%
  .shop-cart-content
    background-color: #141d27
    display: flex
    color: rgba(255, 255, 255, 0.4)
    .conten-left
      flex: 1
      .logo-wrapper
        display: inline-block
        width: 56px
        height: 56px
        box-sizing: border-box
        position: relative
        box-sizing: border-box
        top: -10px
        margin: 0 12px
        padding: 6px
        vertical-align: top
        .logo
          width: 100%
          height: 100%
          background: #333
          font-size: 24px
          line-height: 24px
          text-align: center
          border-radius: 50%
          .icon-shopping_cart
            line-height: 44px
        .num
          position: absolute
          top: 0
          right: 0
      .price
        display: inline-block
        vertical-align: top
        box-sizing: border-box
        margin-top: 12px
        padding-right: 12px
        font-size: 16px
        font-weight: 700
        line-height: 24px
        border-right: 1px solid rgba(255, 255, 255, 0.1)
      .desc
        display: inline-block
        vertical-align: top
        box-sizing: border-box
        margin-top: 12px
        padding-left: 12px
        font-size: 10px
        line-height: 24px
    .content-right
      width: 105px
      flex: 0 0 105px
      .no-enough
        font-size: 12px
        font-weight: 700
        height: 48px
        line-height: 48px
        background: #333
        box-sizing: border-box
        text-align: center
</style>
