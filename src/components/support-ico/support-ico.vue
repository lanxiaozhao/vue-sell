<!--
 * @Author: zhaopan
 * @Date: 2020-04-28 16:30:45
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-23 22:27:02
 -->
<!-- support-ico -->
<template>
<span class="support-ico" :class="icoCla"></span>
</template>

<script>
export default {
name: 'support-ico',
props: {
  size: {
    type: Number
  },
  type: {
    type: Number
  }
},
computed: {
  icoCla() {
    const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    return `icon-${this.size} ${classMap[this.type]}`
  }
}
}
</script>
<style lang='stylus' scroped>
@import '~common/stylus/mixin.styl'
.support-ico
  display: inline-block
  background-repeat: no-repeat
.icon-1
  width: 12px
  height: 12px
  background-size: 12px 12px
  &.decrease
    bg-image('decrease_1')
  &.discount
    bg-image('discount_1')
  &.special
    bg-image('special_1')
  &.invoice
    bg-image('invoice_1')
  &.guarantee
    bg-image('guarantee_1')
.icon-2
  width: 16px
  height: 16px
  background-size: 16px 16px
  &.decrease
    bg-image('decrease_2')
  &.discount
    bg-image('discount_2')
  &.special
    bg-image('special_2')
  &.invoice
    bg-image('invoice_2')
  &.guarantee
    bg-image('guarantee_2')
.icon-3
  width: 12px
  height: 12px
  background-size: 12px 12px
  &.decrease
    bg-image('decrease_3')
  &.discount
    bg-image('discount_3')
  &.special
    bg-image('special_3')
  &.invoice
    bg-image('invoice_3')
  &.guarantee
    bg-image('guarantee_3')
.icon-4
  width: 16px
  height: 16px
  background-size: 16px 162px
  &.decrease
    bg-image('decrease_4')
  &.discount
    bg-image('discount_4')
  &.special
    bg-image('special_4')
  &.invoice
    bg-image('invoice_4')
  &.guarantee
    bg-image('guarantee_4')
</style>
