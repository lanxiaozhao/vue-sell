/*
 * @Author: zhaopan
 * @Date: 2020-04-29 09:28:17
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-23 20:22:34
 */
import { get } from './helpers'
const getSeller = get('/api/seller')
const getGoods = get('/api/goods')
export {
  getSeller,
  getGoods
}
