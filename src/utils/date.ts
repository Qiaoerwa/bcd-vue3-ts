/*
 * @Description: 日期格式化
 * @Autor: fylih
 * @Date: 2021-06-07 16:53:38
 * @LastEditors: fylih
 * @LastEditTime: 2022-01-21 15:15:19
 */
export function _formatDate(date: Date, fmt: string): string {

    const o: any = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S+': date.getMilliseconds() // 毫 
    }
    let k: string
    for (k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            if (k === 'y+') {
                fmt = fmt.replace(RegExp.$1, ('' + o[k]).substr(4 - RegExp.$1.length))
            } else if (k === 'S+') {
                let lens = RegExp.$1.length
                lens = lens === 1 ? 3 : lens
                fmt = fmt.replace(
                    RegExp.$1,
                    ('00' + o[k]).substr(('' + o[k]).length - 1, lens)
                )
            } else {
                fmt = fmt.replace(
                    RegExp.$1,
                    RegExp.$1.length === 1
                        ? o[k]
                        : ('00' + o[k]).substr(('' + o[k]).length)
                )
            }
        }
    }
    return fmt
}