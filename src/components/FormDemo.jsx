import { useState } from 'react'

// 示例3：受控表单 —— Vue v-model 的对等写法
export default function FormDemo() {
  const [text, setText] = useState('')
  const [checked, setChecked] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault() // 阻止表单默认提交刷新页面
    alert('提交内容：' + text + '，勾选=' + checked)
  }

  return (
    <div>
      <h2>受控表单（v-model 的等价物）</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="输入点什么"
        />
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          同意协议
        </label>
        <button type="submit">提交</button>
      </form>
      <p>你输入了：{text}</p>

      <pre>{`// 和 Vue 的区别：
// Vue:  <input v-model="text" />          自动双向绑定
// React: value={text} + onChange={e => setText(e.target.value)}
//       = 单向数据流：值从 state 来，变化通过事件写回 state
// 这就是 React 受控组件的核心思想`}</pre>
    </div>
  )
}
