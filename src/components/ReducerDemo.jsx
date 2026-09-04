import { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload }
    case 'setAge':
      return { ...state, age: action.payload }
    case 'toggleEdit':
      return { ...state, isEdit: !state.isEdit }
    case 'resetForm':
      return { name: '', age: 0, isEdit: false }
    default:
      return state
  }
}

export default function FormDemo() {
  const [form, dispatch] = useReducer(reducer, {
    name: '',
    age: 0,
    isEdit: false
  })

  return (
    <div>
      <input
        value={form.name}
        onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
      />
      <input
        type="number"
        value={form.age}
        onChange={(e) => dispatch({ type: 'setAge', payload: Number(e.target.value) })}
      />
      {form.isEdit ? <p>正在编辑...</p> : <p>未编辑</p>}
      {form.name && <p>{form.name}的年龄是{form.age}岁</p>}
      <button onClick={() => dispatch({ type: 'toggleEdit' })}>切换编辑</button>
      <button onClick={() => dispatch({ type: 'resetForm' })}>重置表单</button>
    </div>
  )
}
