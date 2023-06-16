import { defineConfig } from 'vite'
import { createVitePlugins } from './vite/index'
import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig((context) => {
  const mode = context.mode
  const envDir = 'env'
  const base = './'
  const plugins = createVitePlugins(mode)
  const resolve = {
    alias: {
      '@': join(__dirname, 'src')
    },
    // https://cn.vitejs.dev/config/#resolve-extensions
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
  const server = {
    open: true
  }
  const build = {
    rollupOptions: {
      output: {
        manualChunks: {
          cesium: ['cesium']
        }
      }
    }
  }
  return {
    mode,
    envDir,
    base,
    plugins,
    resolve,
    server,
    build
  }
})
