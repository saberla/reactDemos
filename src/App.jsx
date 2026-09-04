import { useState, useCallback } from 'react'
import Counter from './components/Counter'
import ListDemo from './components/ListDemo'
import FormDemo from './components/FormDemo'
import EffectDemo from './components/EffectDemo'
import PropsDemo from './components/PropsDemo'
import MemoDemo from './components/MemoDemo'
import RefDemo from './components/RefDemo'
import ContextDemo from './components/ContextDemo'
import FetchDemo from './components/FetchDemo'
import ChildDemo from './components/ChildDemo'
import ReducerDemo from './components/ReducerDemo'  

export default function App() {
  // state：当前选中的示例 tab
  const [tab, setTab] = useState('counter')
  const [count, setCount] = useState(0) // 用于测试父子组件通信
  const [text, setText] = useState('') // 用于测试父子组件通信

  const tabs = [
    { key: 'counter', label: 'useState 计数器' },
    { key: 'list', label: '列表渲染' },
    { key: 'form', label: '受控表单' },
    { key: 'effect', label: 'useEffect' },
    { key: 'props', label: 'Props 传值' },
    { key: 'memo', label: 'useMemo/useCallback' },
    { key: 'ref', label: 'useRef' },
    { key: 'context', label: 'useContext' },
    { key: 'fetch', label: '接口请求' },
    { key: 'child', label: '父子组件通信（memo子组件）' },
    { key: 'reducer', label: 'useReducerDemo' },
  ]

  const handleSend = useCallback((msg) => {
    setText(msg)
  }, []) // 用 useCallback 包裹，避免每次渲染都新建函数引用，导致子组件 memo 失效

  return (
    <div className="app">
      <h1>React 语法学习 · react-pro</h1>
      <p className="tip">改任意一个文件保存即热更新，用来测试语法对不对。</p>

      <nav className="tabs">
        {tabs.map((t) => (
          <button
            key={t.key}
            className={tab === t.key ? 'tab active' : 'tab'}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {tab === 'child' && (<div className="info">
        <p>父组件的 count = {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>count + 1</button>
        <p>父组件接收子组件的值 = {text}</p>
      </div>)}

      <section className="panel">
        {tab === 'counter' && <Counter />}
        {tab === 'list' && <ListDemo />}
        {tab === 'form' && <FormDemo />}
        {tab === 'effect' && <EffectDemo />}
        {tab === 'props' && (
          <PropsDemo title="来自父组件的标题">
            这是放在标签之间的内容（相当于 Vue 的默认插槽）
          </PropsDemo>
        )}
        {tab === 'memo' && <MemoDemo />}
        {tab === 'ref' && <RefDemo />}
        {tab === 'context' && <ContextDemo />}
        {tab === 'fetch' && <FetchDemo />}
        {tab === 'child' && <ChildDemo message="父组件传给子组件的消息,不会随count变化更新" onSend={handleSend} />}
        {tab === 'reducer' && <ReducerDemo />}
      </section>
    </div>
  )
}
