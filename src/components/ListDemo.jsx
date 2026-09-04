import { useState } from 'react'

const initialUsers = [
  { id: 1, name: '张三', age: 18 },
  { id: 2, name: '李四', age: 22 },
  { id: 3, name: '王五', age: 25 }
]

// 示例2：列表渲染 —— array.map + 唯一 key
export default function ListDemo() {
  const [list, setList] = useState(initialUsers)

  const addUser = () => {
    const nextId = list.length ? Math.max(...list.map((u) => u.id)) + 1 : 1
    // 注意：不能直接 list.push()，要生成新数组
    setList([...list, { id: nextId, name: '新用户' + nextId, age: 20 }])
  }

  const removeUser = (id) => {
    setList(list.filter((u) => u.id !== id))
  }

  return (
    <div>
      <h2>列表渲染（map + key）</h2>
      <button onClick={addUser}>添加一条</button>
      <ul>
        {list.map((u) => (
          <li key={u.id}>
            {u.name} - {u.age}岁
            <button onClick={() => removeUser(u.id)} style={{ marginLeft: 8 }}>
              删除
            </button>
          </li>
        ))}
      </ul>

      <pre>{`// 要点：
// 1. 用 array.map() 把数据数组转成 JSX 数组
// 2. 每个元素必须带唯一 key（用 id，别用 index，否则增删会错乱）
// 3. 不能直接修改数组，要用 filter/map/展开运算符生成新数组`}</pre>
    </div>
  )
}
