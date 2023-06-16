/**
 * @description vite 插件配置
 * @author zhangcj
 * @date 2023-06-16 15:44:38
 */
import vue from '@vitejs/plugin-vue'
import { splitVendorChunkPlugin } from 'vite'
import { createExternalPlugin } from './plugins/external'
import { createInsertHtmlPlugin } from './plugins/insertHtml'
export function createVitePlugins(mode) {
    const plugins = [
        vue(), splitVendorChunkPlugin(), createExternalPlugin(), createInsertHtmlPlugin(mode)
    ]
    return plugins
}
