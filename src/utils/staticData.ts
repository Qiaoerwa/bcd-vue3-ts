/*
 * @Description: 静态数据
 * @Author: ly
 * @Date: 2021-06-23 16:24:41
 * @LastEditors: fylih
 * @LastEditTime: 2022-01-07 17:11:59
 */
// 运营商
export const operatorList: Array<object> = [{
    value: null,
    label: "全部",
}, {
    value: '0',
    label: "未知",
},
{
    value: '1',
    label: "移动",
},
{
    value: '3',
    label: "联通",
},
{
    value: '4',
    label: "电信",
},
]

// 状态
export const statusList: Array<object> = [{
    value: null,
    label: "全部",
},
{
    value: "0",
    label: "未确认",
},
{
    value: "1",
    label: "已确认",
},
{
    value: "2",
    label: "确认失败",
},
{
    value: "3",
    label: "正在开通",
},
{
    value: "4",
    label: "开通失败",
},
{
    value: "5",
    label: "退订成功",
},
{
    value: "6",
    label: "开通成功",
},
]
export const spotFilter = function (status: string): string {
    if (status === '1' || status === '5' || status === '6') {
        return '_green_spot'
    } else if (status === '0' || status === '3') {
        return '_yellow_spot'
    } else {
        return '_red_spot'
    }
}