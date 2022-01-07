/*
 * @Description: rem适配
 * @Autor: fylih
 * @Date: 2021-06-08 14:48:41
 * @LastEditors: fylih
 * @LastEditTime: 2022-01-07 17:07:58
 */
function _setRem() {
    // 基准大小
    const baseSize = 16;
    const basePc = baseSize / 1920; // 表示1920的设计图,使用10PX的默认值
    const vW = window.innerWidth; // 当前窗口的宽度
    const rem = vW * basePc; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
    document.documentElement.style.fontSize = rem + "px";
}
// 初始化
_setRem();
// 改变窗口大小时重新设置 rem
window.addEventListener('resize', () => {
    _setRem()
})