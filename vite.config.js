import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport({
    imports: ['vue', 'vue-router',],
    resolvers: [ElementPlusResolver()],
    eslintrc: {
      enabled: true, // 解决 Eslint 提示 no-undef 错误
    },
  }),
  Components({
    // 配置Element Plus采用saas样式配色系统
    resolvers: [ElementPlusResolver({importStyle: 'sass'})],
  }),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
    }
  },
  css:{
    preprocessorOptions: {
      scss: {
        api:"modern-compiler",
        additionalData: `@use "@/assets/css/element.scss" as *;`,
      }
    }
  }
})
