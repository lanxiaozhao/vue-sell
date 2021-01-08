<!--
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2020-07-20 22:32:45
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-24 20:15:39
-->
<!-- goods -->
<template>
  <div class="goods">
    <div class="scroll-nav-wrapper">
      <cube-scroll-nav
        :side="true"
        :data="goods"
        :options="scrollOptions"
        v-if="goods.length">
        <template slot="bar" slot-scope="props">
          <cube-scroll-nav-bar
            direction="vertical"
            :labels="props.labels"
            :txts="barTxts"
            :current="props.current">
            <template slot-scope="props">
              <div class="text">
                <support-ico v-if="props.txt.type >= 1" :size=3 :type="props.txt.type"></support-ico>
                <span>{{props.txt.name}}</span>
                <span class="num" v-if="props.txt.count">
                  <bubble :count="props.txt.count"></bubble>
                </span>
              </div>
            </template>
          </cube-scroll-nav-bar>
        </template>
        <cube-scroll-nav-panel
          v-for="good in goods"
          :key="good.name"
          :label="good.name"
          :title="goods.name">
          <ul>
            <li v-for="food in good.foods" :key="food.name" class="food-item">
              <div class="icon">
                <img :src="food.icon" width="57" height="57">
              </div>
              <div class="content">
                <h2>{{food.name}}</h2>
                <div class="desc">{{food.description}}</div>
                <div class="extra">
                  <span>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cart-control-wrapper">
                  <cart-control :food="food"></cart-control>
                </div>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
    <div class="shop-cart-wrapper">
      <shop-cart :delivery-price="data.deliveryPrice"
                 :min-price="data.minPrice"></shop-cart>
    </div>
  </div>
</template>

<script>
import { getGoods } from 'api/index.js'
import SupportIco from 'components/support-ico/support-ico'
import Bubble from 'components/bubble/bubble'
import CartControl from 'components/cart-control/cart-control'
import ShopCart from 'components/shop-cart/shop-cart'
export default {
name: 'Goods',
props: {
  // 就是获取到的seller
  data: {
    type: Object,
    dafault() {
      return {}
    }
  }
},
data() {
  return {
    goods: [],
    scrollOptions: {
      // bscroll需要配置click：false,否则内部点击事件点击一次会触发两次（已经阻止冒泡了）
      click: false,
      directionLockThreshold: 0
    }
  }
},
computed: {
  barTxts() {
    // 通过slot-scope="props"获得的父组件传入的属性只有goods中name的属性，
    // 因为在组件的使用中只用到了name属性，其余属性并没有传入所以获取不到
    // 所以需要重新传入会用到type等属性
    const ret = []
    this.goods.forEach((good) => {
      const { type, name, foods } = good
      // 计算传入的foods中每一项food的count的值之和
      let count = 0
      foods.forEach((food) => {
        count += food.count || 0
      })
      // 这里应该是传入的一个个由type\name\count组成的对象
      ret.push({ type, name, count })
    })
    return ret
  }
},
methods: {
  _getGoods() {
    getGoods().then(goods => {
      this.goods = goods
    })
  }
},
created() {
  this._getGoods()
},
components: {
  SupportIco,
  Bubble,
  CartControl,
  ShopCart
}
}
</script>
<style lang='stylus' scoped>
/* @import url(); 引入css类 */
@import "~common/stylus/mixin"
@import "~common/stylus/variable"
.goods
  text-align: left
  height: 100%
  position: relative
  .scroll-nav-wrapper
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 48px
    .text
      position: relative
      width: 100%
      .support-ico
        margin-right: 4px
      .num
        position: absolute
        right: -8px
        top: -10px
    .food-item
      padding: 18px
      position: relative
      display: flex
      .icon
        img
          border-radius: 2px
      .content
        margin: 2px 0 0 10px
        .cart-control-wrapper
          position: absolute
          right: 18px
          bottom: 12px
        h2
          font-size: 14px
          color: $color-background
          line-height: 14px
        .desc
          margin: 8px 0
          color: rgb(147, 153, 159)
          font-size: 10px
          line-height: 10px
        .extra
          color: rgb(147, 153, 159)
          font-size: 10px
          line-height: 10px
        .price
          font-weight: normal
          line-height: 24px
          .now
            font-size: 14px
            color: $color-red
          .old
            font-size: 10px
            color: rgb(147, 153, 159)
            margin-left: 8px
            text-decoration: line-through
    >>> .cube-scroll-nav-bar
      width: 80px
      overflow: hidden
    >>> .cube-scroll-nav-bar-item
      padding: 0 12px
      white-space: normal
      display: flex
      align-items: center
      height: 56px
      line-height: 14px
      font-size: $fontsize-small
      background: $color-background-ssss
    >>> .cube-scroll-nav-panel-title
      padding-left: 14px
      height: 26px
      line-height: 26px
      border-left: 2px solid $color-col-line
      font-size: $fontsize-small
      color: $color-grey
      background: $color-background-ssss
    >>> .cube-scroll-nav-bar-item_active
      color: $color-dark-grey
      background-color: $color-white
  .shop-cart-wrapper
    position: absolute
    bottom: 0
    right: 0
    left: 0
    z-index: 50
    width: 100%
    height: 48px
</style>
