import { useRef, useState } from 'react'

// useRef（两种用法）
export default function RefDemo() {
  const [text, setText] = useState('')
  const inputRef = useRef(null)   // 指向真实 DOM 节点（等价于 Vue 的 ref）
  const countRef = useRef(0)      // 存「跨渲染的可变值」，改它不触发重渲染
  const [renderCount, setRenderCount] = useState(0)

  const focusInput = () => {
    inputRef.current.focus()
  }

  const bumpRef = () => {
    countRef.current += 1
    // setRenderCount((c) => c + 1) // 手动触发一次渲染，好让界面看到最新值
    console.log('countRef 当前值：', countRef.current)
  }

  return (
    <div>
      <h2>useRef（两种用法）</h2>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="点下面按钮聚焦我"
      />
      <button onClick={focusInput}>聚焦输入框</button>
      <p>countRef = {countRef.current}</p>
      <button onClick={bumpRef}>+1（useRef不触发渲染，靠按钮手动刷新看值）</button>
      <p>renderCount={renderCount}</p>
      <button onClick={() => setRenderCount((c) => c + 1)}>不用useRef刷新渲染</button>
      <pre>{`// 要点：
// 1. useRef(null) + ref={inputRef}  → 拿到真实 DOM（inputRef.current）
//    等价于 Vue 的 ref="xxx" / this.$refs
// 2. useRef(初始值) 存「跨渲染保存的可变值」，改 .current 不触发重渲染
//    适合：存定时器 id、上一次的值、避免重复初始化`}</pre>
    </div>
  )
}
