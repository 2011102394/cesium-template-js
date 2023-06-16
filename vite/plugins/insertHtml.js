/**
 * @description 编辑html的插件
 * @author zhangcj
 * @date 2023-05-26 14:08:23
 */
import { insertHtml, h } from 'vite-plugin-insert-html'
import { loadEnv } from 'vite'
export function createInsertHtmlPlugin(mode) {
  const envDir = 'env'
  const isProduct = mode === 'production'
  const env = loadEnv(mode, envDir)
  const cesiumBaseUrl = env['VITE_CESIUM_BASE_URL']
  return insertHtml({
    head: [
      // 生产模式使用 CDN 或已部署的 CesiumJS 在线库链接，开发模式用拷贝的库文件，根据 VITE_CESIUM_BASE_URL 自动拼接
      h('script', {
        // 因为涉及前端路径访问，所以开发模式最好显式拼接 base 路径，适配不同 base 路径的情况
        src: isProduct
          ? `${cesiumBaseUrl}Cesium.js`
          : `./${cesiumBaseUrl}Cesium.js`
      }),
      h('link', {
        href: isProduct
          ? `${cesiumBaseUrl}Widgets/widgets.css`
          : `./${cesiumBaseUrl}Widgets/widgets.css`,
        rel: 'stylesheet'
      })
    ]
  })
}
