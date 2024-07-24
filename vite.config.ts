import {defineConfig} from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 5173,
        host: '0.0.0.0',
        open:true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    resolve:{
        alias: {
            '@src': resolve('src'),
        }
    },
    plugins: [
        vue(),
        AutoImport({
            imports: [
                'vue',
                {
                    'naive-ui': [
                        'useDialog',
                        'useMessage',
                        'useNotification',
                        'useLoadingBar'
                    ]
                }
            ]
        }),
        Components({
            resolvers: [NaiveUiResolver()]
        })
    ],
    css: {
        postcss: {
            plugins: [
                tailwindcss,
                autoprefixer,
            ],
        },
    },
    optimizeDeps: {
        include: ['@vicons/ionicons5']
    },
    build: {
        minify: 'esbuild', // 使用 esbuild 进行压缩
        target: 'es2015', // 指定目标环境
        cssMinify: true, // 压缩 CSS
        rollupOptions: {
            output: {
                manualChunks: {
                    // 可以在这里定义自定义的代码分割策略
                    'vue': ['vue'],
                    'naive-ui': ['naive-ui'],
                },
            },
        },
        // 如果需要，可以调整 chunk 大小警告限制
        chunkSizeWarningLimit: 1000,
    },
})
