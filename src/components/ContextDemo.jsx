import { createContext, useContext, useState } from 'react'

// 1. 创建 context
const ThemeContext = createContext(null)

// 3. 消费方：用 useContext 拿值（任意层级的子组件都能拿到，不用一层层传 props）
function Toolbar() {
  const { theme, toggle } = useContext(ThemeContext)
  return (
    <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8 }}>
      <p>当前主题：{theme}</p>
      <button onClick={toggle}>切换主题</button>
    </div>
  )
}

// useContext（跨组件传值，免去 props 层层透传）
export default function ContextDemo() {
  const [theme, setTheme] = useState('light')

  // 2. 提供方：把值通过 Provider 往下传
  const value = {
    theme,
    toggle: () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={value}>
      <h2>useContext（跨组件传值）</h2>
      <p>相当于 Vue 的 provide / inject</p>
      <Toolbar />
      <pre>{`// 要点：
// createContext() 创建 → <Ctx.Provider value={...}> 提供 → useContext(Ctx) 消费
// 适合：主题、当前用户、语言包等「全局共享」数据
// 注意：Provider 的 value 变了，所有消费组件都会重渲染`}</pre>
    </ThemeContext.Provider>
  )
}
