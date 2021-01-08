<!--
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2020-07-24 14:44:37
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-24 14:57:52
-->
<!-- bubble -->
<template>
<span class="bubble">{{count}}</span>
</template>

<script>
export default {
name: 'Bubble',
props: {
  count: {
    type: Number,
    default: 0
  }
}
}
</script>
<style lang='stylus' scoped>
/* @import url(); 引入css类 */
.bubble
  display: inline-block
  padding: 0 5px
  height: 16px
  line-height: 16px
  text-align: center
  border-radius: 16px
  color: #fff
  background: linear-gradient(to right, #fc9153, #f01414)
</style>
