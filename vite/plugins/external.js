/**
 * @description 外部化第三方包
 * @author zhangcj
 * @date 2023-05-26 14:04:52
 */
import { viteExternalsPlugin } from 'vite-plugin-externals'
export function createExternalPlugin() {
  return viteExternalsPlugin({
    // 外部化 cesium 依赖，之后全局访问形式是 window['Cesium']
    cesium: 'Cesium'
  })
}
