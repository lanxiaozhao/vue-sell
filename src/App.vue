<!--
 * @Author: zhaopan
 * @Date: 2020-04-28 15:00:09
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-23 20:57:14
 -->
<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div id="tab-wrapper">
      <tab-bar :tabs="tabs"></tab-bar>
    </div>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import TabBar from 'components/tab-bar/tab-bar'
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
import { getSeller } from 'api/index.js'
export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  computed: {
    tabs () {
      return [
          {
            label: '商品',
            components: Goods,
            data: this.seller
          },
          {
            label: '评价',
            components: Ratings,
            data: this.seller
          },
          {
            label: '商家',
            components: Seller,
            data: this.seller
          }
      ]
    }
  },
  components: {
    VHeader,
    TabBar
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then(seller => {
        this.seller = seller
      })
    }
  }
}
</script>

<style lang="stylus">
#tab-wrapper
  position: fixed
  left: 0
  right: 0
  bottom: 0
  top: 136px
</style>
