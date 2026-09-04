import { useState, useEffect } from 'react'

// 真实接口请求（fetch + useState + useEffect）
export default function FetchDemo() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const load = () => {
    setLoading(true)
    setError('')
    // 用原生 fetch 请求公开测试接口（需要联网）
    fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      .then((res) => {
        if (!res.ok) throw new Error('HTTP ' + res.status)
        return res.json()
      })
      .then((data) => setList(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }

  // 挂载时自动请求一次
  useEffect(() => {
    load()
  }, [])

  return (
    <div>
      <h2>接口请求（fetch + useState + useEffect）</h2>
      <button onClick={load} disabled={loading}>
        {loading ? '加载中…' : '重新请求'}
      </button>
      {error && <p style={{ color: 'red' }}>出错：{error}</p>}
      <ul>
        {list.map((u) => (
          <li key={u.id}>
            {u.name} · {u.email}
          </li>
        ))}
      </ul>
      <pre>{`// 要点：
// 1. 用 useEffect([]) 在挂载时发请求（或按钮触发）
// 2. fetch 返回 Promise，用 .then 处理；注意判断 res.ok
// 3. loading / error / data 三态管理是标配
// 4. 公司项目一般用 umi-request / axios，但 fetch 语法通用
// 5. 真实项目记得用 AbortController 处理组件卸载后的 setState 告警`}</pre>
    </div>
  )
}
