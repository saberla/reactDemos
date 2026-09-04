import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 配置：React 项目最小配置
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true // 启动后自动打开浏览器
  }
})
