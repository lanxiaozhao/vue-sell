/*
 * @Author: zhaopan
 * @Date: 2020-04-28 22:12:28
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-04-29 09:40:16
 */
import axios from 'axios'
const ERR_OK = 0
export function get(url) {
  return function(params) {
    return axios.get(url, params).then(res => {
      const { errno, data } = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch(() => {})
  }
}
