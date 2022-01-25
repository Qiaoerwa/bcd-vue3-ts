/*
* @Description: element组件引入
* @Author: ly
* @Date: 2021-05-17 14:12:43
 * @LastEditors: fylih
 * @LastEditTime: 2022-01-21 16:17:30
*/
import { App } from 'vue';
import 'element-plus/dist/index.css'
import {
    ElButton,
    ElLoading,
    ElInput,
    ElInputNumber,
    ElDatePicker,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElContainer,
    ElHeader,
    ElAside,
    ElTooltip,
    ElCheckbox,
    ElCheckboxButton,
    ElCheckboxGroup,
    ElPopover,
    ElRow,
    ElCol,
    ElTable,
    ElPagination,
    ElTableColumn,
    ElTabs,
    ElTabPane,
    ElForm,
    ElFormItem,
    ElSelect,
    ElOption,
    ElTag,
    ElTimePicker,
    ElDialog,
    ElTimeline,
    ElTimelineItem,
    ElSwitch,
    ElUpload,
    ElMessage,
    ElMessageBox
} from 'element-plus';

export const elementPlugin = function (vm: App): void {
    vm.use(ElButton)
        .use(ElLoading)
        .use(ElInput)
        .use(ElInputNumber)
        .use(ElDatePicker)
        .use(ElMain)
        .use(ElMenu)
        .use(ElMenuItem)
        .use(ElContainer)
        .use(ElHeader)
        .use(ElAside)
        .use(ElTooltip)
        .use(ElCheckbox)
        .use(ElCheckboxButton)
        .use(ElCheckboxGroup)
        .use(ElPopover)
        .use(ElRow)
        .use(ElCol)
        .use(ElTable)
        .use(ElPagination)
        .use(ElTableColumn)
        .use(ElTabs)
        .use(ElTabPane)
        .use(ElForm)
        .use(ElFormItem)
        .use(ElSelect)
        .use(ElOption)
        .use(ElTag)
        .use(ElTimePicker)
        .use(ElDialog)
        .use(ElTimeline)
        .use(ElTimelineItem)
        .use(ElSwitch)
        .use(ElUpload)
    vm.provide('$message', ElMessage)
    vm.provide('$confirm', ElMessageBox.confirm)
    vm.provide('$loading', ElLoading)
}