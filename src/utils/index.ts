/*
 * @Description: 公共方法
 * @Author: ly
 * @Date: 2021-06-02 09:55:18
 * @LastEditors: fylih
 * @LastEditTime: 2022-01-07 17:13:32
 */
/**
 * @description: 储存session中数据
 * @param {String} name session中储存名称
 * @param {String} value session中储存值
 * @return: undefined
 * @author: ly
 */
export const _setSession = (name: string, value: any): void => {
	window.sessionStorage[name] = JSON.stringify(value)
}

/**
 * @description: 获取session中数据
 * @param {String} name session中储存名称
 * @return: string | null
 * @author: ly
 */
export const _getSession = (name: string) => {
	if (window.sessionStorage[name]) {
		return JSON.parse(window.sessionStorage[name]);
	} else {
		return null;
	}
}