/**
 * @description vite 插件配置
 * @author zhangcj
 * @date 2023-06-16 15:44:38
 */
import vue from '@vitejs/plugin-vue'
export function createVitePlugins(mode) {
    const plugins = [
        vue(),
    ]
    return plugins
}
