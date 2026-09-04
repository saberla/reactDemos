import { useState, useMemo, useCallback, memo } from 'react'

// 用一个「昂贵计算」模拟耗时操作
function expensiveCalc(n) {
  let sum = 0
  for (let i = 0; i < 1e7; i++) sum += i % 7
  return n * sum
}

// React.memo 包裹的子组件：props 浅比较没变就不重渲染
const Child = memo(function Child({ onClick, label }) {
  console.log('Child 重渲染了')
  return <button onClick={onClick}>{label}</button>
})

// useMemo / useCallback（性能优化）
export default function MemoDemo() {
  const [count, setCount] = useState(0)
  const [other, setOther] = useState(0)

  // useMemo：只有 count 变时才重算，避免每次渲染都跑昂贵计算
  const result = useMemo(() => expensiveCalc(count), [count])

  // useCallback：缓存函数引用，传给 memo 子组件时才不会因函数每次新建而失效
  // const handleClick = useCallback(() => setOther((o) => o + 1), [])
  const handleClick = () => setOther((o) => o + 1) // 每次都会重新渲染

  return (
    <div>
      <h2>useMemo / useCallback（性能优化）</h2>
      <p>count = {count}，昂贵计算结果 = {result}</p>
      <button onClick={() => setCount((c) => c + 1)}>count +1</button>
      <p>other = {other}</p>
      <Child onClick={handleClick} label="点我改 other（看控制台 Child 是否重渲染）" />
      <pre>{`// 要点：
// useMemo(fn, [deps])     缓存「计算结果」，依赖变才重算
// useCallback(fn, [deps])  缓存「函数引用」，常配合 React.memo 使用
// React.memo(Component)    props 浅比较没变就不重渲染
// 注意：不要滥用，只有真的昂贵/有重渲染问题才用`}</pre>
    </div>
  )
}
