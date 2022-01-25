/*
 * @Description: vue引入
 * @Author: ly
 * @Date: 2021-05-17 14:12:43
 * @LastEditors: fylih
 * @LastEditTime: 2022-01-21 16:11:05
 */

import { App } from 'vue'
import { _formatDate } from '../utils/date'
export const vuePlugin = function (vm: App): void {
    vm.provide('$formatDate', _formatDate)
}