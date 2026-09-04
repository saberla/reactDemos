# react-pro · React 

用 Vite + React 18 搭建的最小可运行项目

## 运行

```bash
cd D:\code\react-pro
npm install
npm run dev
```

启动后改任意文件保存即热更新（HMR）。

## 项目结构

```
react-pro/
├── index.html              # 页面入口，挂载点 #root
├── vite.config.js          # Vite 配置
├── package.json
└── src/
    ├── main.jsx           
    ├── App.jsx             # 主组件
    ├── styles.css
    └── components/
        ├── Counter.jsx     # useState 计数器
        ├── ListDemo.jsx    # 列表渲染 map + 唯一 key
        ├── FormDemo.jsx    # 受控表单（Vue v-model 的对等写法）
        ├── EffectDemo.jsx  # useEffect 三种依赖用法
        ├── PropsDemo.jsx   # 父传子 props + children
        ├── MemoDemo.jsx    # useMemo / useCallback / React.memo 性能优化
        ├── RefDemo.jsx     # useRef（DOM 引用 + 可变值）
        ├── ContextDemo.jsx # useContext 跨组件传值（Vue provide/inject 对等）
        └── FetchDemo.jsx   # fetch 真实接口请求 + loading/error 三态
```
