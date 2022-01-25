/*
 * @Description: 注册全局组件
 * @Author: ly
 * @Date: 2021-05-17 14:12:43
 * @LastEditors: ly
 * @LastEditTime: 2021-06-11 09:42:58
 */
// 引入组件
import GlobalTableHead from "../components/global/table-head/GlobalTableHead.vue"
import GlobalTableView from "../components/global/table-view/GlobalTableView.vue"

const globalComponentsPlugin = {
    install(Vue) {
        // Vue.component("组件名"，引入的组件);
        Vue.component("GlobalTableHead", GlobalTableHead);
        Vue.component("GlobalTableView", GlobalTableView);
    }
}

export default globalComponentsPlugin;