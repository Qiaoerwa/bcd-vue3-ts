/*
 * @Description: 全局配置
 * @Author: ly
 * @Date: 2021-05-31 14:15:24
 * @LastEditors: ly
 * @LastEditTime: 2021-06-03 09:25:37
 */
const GLOBAL = {
    baseUrl: process.env.NODE_ENV === 'production' ? '' : '/api'
}

export default GLOBAL;