/*
 * @Description:
 * @Autor: fylih
 * @Date: 2021-07-06 15:22:39
 * @LastEditors: fylih
 * @LastEditTime: 2022-01-07 17:06:23
 */
export function exportFile(data: any, type: string = 'zip') {
    const options: any = {
        'xls': "application/vnd.ms-excel",
        'xlsx': "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        'zip': "application/zip"
    }
    const blob = new Blob([data], {
        type: options[type]
    })
    const objectUrl = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('style', 'display:none')
    a.setAttribute('href', objectUrl)
    a.click()
    URL.revokeObjectURL(objectUrl)
}