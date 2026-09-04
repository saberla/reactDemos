import { useState, useEffect, useMemo } from 'react'

// 示例4：useEffect —— 处理副作用（数据请求、定时器、订阅等）
export default function EffectDemo() {
  const [count, setCount] = useState(0)
  const [now, setNow] = useState(new Date().toLocaleTimeString())

  // 不写依赖数组 → 每次DOM渲染完成后才会都执行一次
  useEffect(() => {
    document.title = '点击次数：' + count
  })

  // 空依赖数组 [] → 只在挂载时执行一次（相当于 Vue 的 onMounted）
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date().toLocaleTimeString())
    }, 1000)
    // return 的函数是清理函数（相当于 Vue 的 onUnmounted）
    return () => clearInterval(timer)
  }, [])

  // 错误写法  直接将数组/对象写入依赖数组，React 会认为它们每次渲染都是新的引用，从而导致 useEffect 每次都执行
  // const newArr = [11,22,33] 

  // useEffect(()=>{
  //   console.log('疯狂触发')
  // }, [newArr])

  //正确写法  将数组/对象定义在组件外部，或者使用 useMemo/useCallback 来缓存它们的引用
  const newArr = useMemo(()=>[11,22,count], [count])
  useEffect(()=>{
    console.log('count 变化时触发', newArr)
  }, [newArr])

  return (
    <div>
      <h2>useEffect（副作用）</h2>
      <p>点击次数：{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>点我</button>
      <p>当前时间：{now}</p>

      <pre>{`// 要点：useEffect(fn, 依赖数组)
//   []           只挂载时跑一次
//   [a, b]       a 或 b 变化时跑
//   不写数组      每次渲染都跑
// return 的函数 = 清理（卸载前 / 下次执行前调用）`}</pre>
    </div>
  )
}
