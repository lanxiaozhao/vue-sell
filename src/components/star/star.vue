<!--
 * @Author: zhaopan
 * @Date: 2020-04-29 11:05:40
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-04-29 18:27:56
 -->
<!-- star -->
<template>
<div class="star" :class="starType">
  <span v-for="(itemClass, index) in itemClasses" :key="index" :class="itemClass" class="starItem"></span>
</div>
</template>

<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'
export default {
  name: 'star',
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      return `star-${this.size}`
    },
    itemClasses() {
      const result = []
      // 将得分换算成整数或者.5的形式
      const score = Math.floor(this.score * 2) / 2
      // 判断是否有小数
      const hasDecimal = score % 1 !== 0
      // 判断整数
      const integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON)
      }
      if (hasDecimal) {
        result.push(CLS_HALF)
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }
      return result
    }
    }
}
</script>
<style lang='stylus' scroped>
@import '~common/stylus/mixin.styl'
.star
  display: flex
  align-items: center
  justify-content: center
  &.star-24
    .starItem
      background-repeat: no-repeat
      width: 10px
      height: 10px
      background-size: 10px 10px
      margin-right: 3px
      &:last-child
        margin-right: 0
      &.on
        bg-image('star24_on')
      &.half
        bg-image('star24_half')
      &.off
        bg-image('star24_off')
  &.star-36
    .starItem
      background-repeat: no-repeat
      width: 15px
      height: 155px
      background-size: 15px 15px
      margin-right: 6px
      &:last-child
        margin-right: 0
      &.on
        bg-image('star36_on')
      &.half
        bg-image('star36_half')
      &.off
        bg-image('star36_off')
  &.star-48
    .starItem
      background-repeat: no-repeat
      width: 20px
      height: 19px
      background-size: 20px 19px
      margin-right: 22px
      &:last-child
        margin-right: 0
      &.on
        bg-image('star48_on')
      &.half
        bg-image('star48_half')
      &.off
        bg-image('star48_off')
</style>
