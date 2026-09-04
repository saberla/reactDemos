// 示例5：Props 传值 —— 父组件向子组件传递数据
// 函数参数解构接收：{ title, children }
export default function PropsDemo({ title, children }) {
  return (
    <div>
      <h2>Props 传值</h2>
      <p>父组件传来的 title：{title}</p>
      <div className="slot">
        {children && <p>children 内容：{children}</p>}
      </div>
      <pre>{`// 要点：
// 1. 父组件 <PropsDemo title="xxx" /> 传属性
// 2. 子组件用函数参数 { title } 解构接收
// 3. children = 标签之间的内容，相当于 Vue 的默认插槽`}</pre>
    </div>
  )
}
