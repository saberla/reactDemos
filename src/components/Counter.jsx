import { useState } from 'react'

// 示例1：useState 计数器 —— 最基础的 state 用法
export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>useState 计数器</h2>
      <p>当前计数：{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
      <button onClick={() => setCount(0)}>重置</button>

      <pre>{`// 要点：
// 1. const [值, 改值函数] = useState(初始值)
// 2. 不能直接 count++（React 不可变），必须用 setCount 触发重渲染
// 3. 依赖旧值时用函数式更新 setCount(c => c + 1)，避免闭包拿到旧值`}</pre>
    </div>
  )
}
