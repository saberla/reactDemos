import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

// React 18 用 createRoot 挂载（注意：你公司 React 17 + Umi3 用的是 ReactDOM.render）
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
