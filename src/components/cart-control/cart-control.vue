<!--
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2020-07-24 15:13:08
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-24 18:38:08
-->
<!-- cart-control -->
<template>
<div class="cart-control">
  <transition name="move">
    <div class="decrease" @click.stop="decrease" v-show="food.count > 0">
      <span class="inner icon-remove_circle_outline"></span>
    </div>
  </transition>
  <div class="count" v-show="food.count > 0">{{food.count}}</div>
  <div class="incresse" @click.stop="increase">
    <span class="inner icon-add_circle"></span>
  </div>
</div>
</template>

<script>
export default {
name: 'cart-control',
props: {
  food: {
    type: Object,
    default() {
      return {}
    }
  }
},
methods: {
 increase(event) {
  if (!this.food.count) {
   this.$set(this.food, 'count', 1)
  } else {
    this.food.count++
  }
  console.log(event)
 },
 decrease() {
   this.food.count--
 }
}
}
</script>
<style lang='stylus' scoped>
/* @import url(); 引入css类 */
 @import "~common/stylus/variable"
.cart-control
  display: flex
  .decrease
    &.move-enter-active, &.move-leave-active
      transition: all 0.4s linear
    &.move-enter, &.move-leave-active
      opacity: 0
      transform: translate3d(24px, 0, 0)
      .inner
        transform: rotate(180deg)
  .inner
    font-size: 24px
    color: $color-blue
    line-height: 24px
    transition: all 0.4s linear
    transform: rotate(0deg)
  .count
    width: 24px
    font-size: 10px
    line-height: 24px
    color: rgb(147, 153, 159)
    text-align: center
</style>
