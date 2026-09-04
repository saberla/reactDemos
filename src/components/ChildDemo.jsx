import { memo, useRef } from 'react';
export default memo(function ChildDemo({onSend, message}) {
  const handleClick = () => {
    onSend('来自子组件的消息');
  }

  console.log('ChildDemo 渲染了');

  const renderCount = useRef(0);
  renderCount.current += 1;

  return (<div style={{border: '1px solid #ccc', padding: '10px', backgroundColor: '#fff'}}>
    <h2>子组件</h2>
    <p>子组件的信息，使用了memo不会随count变化更新：{message}</p>
    <p>子组件渲染次数：{renderCount.current}</p>
    <button onClick={handleClick}>点我给父组件发消息</button>
  </div>);
})