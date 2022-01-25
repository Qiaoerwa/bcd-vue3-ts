/*
 * @Description: 注册全局过滤器
 * @Author: ly
 * @Date: 2021-05-17 14:12:43
 * @LastEditors: fylih
 * @LastEditTime: 2021-06-25 16:58:11
 */
const filterPlugin = {
    install(Vue) {
        // status是竖杠前面传入的值，list 是竖杠后面方法传入的参数
        Vue.filter('statusFilter', function (status, list = []) {
            if (!status) {
                return "--"
            }
            let findOne = list.find(ele => {
                return ele.value === status
            })
            if (findOne && findOne.label) {
                return findOne.label
            } else {
                return "--"
            }
        })
    }
}

export default filterPlugin;