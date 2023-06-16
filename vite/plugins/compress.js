import compression from 'vite-plugin-compression'
/**
 * @description vite 打包压缩插件
 * @author zhangcj
 * @date 2023-05-26 14:01:28
 */
export function createCompressionPlugin() {
  return compression({
    // 详细配置参考 https://github.com/vbenjs/vite-plugin-compression/tree/main#readme
    threshold: 10 * 1024 // 10KB 以下不压缩
  })
}
