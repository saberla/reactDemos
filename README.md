# react-pro · React 语法学习项目

用 Vite + React 18 搭建的最小可运行项目，专给你**学习和测试 React 语法是否正确**用。

## 怎么跑起来

```bash
cd D:\code\react-pro
npm install
npm run dev
```

启动后浏览器自动打开 http://localhost:5173 ，改任意文件保存即热更新（HMR）。

## 项目结构

```
react-pro/
├── index.html              # 页面入口，挂载点 #root
├── vite.config.js          # Vite 配置
├── package.json
└── src/
    ├── main.jsx            # 用 createRoot 挂载 App（React 18 写法）
    ├── App.jsx             # 主组件，用 tab 切换下面 5 个示例
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

## 学习建议
顶部 9 个 tab 各演示一个核心语法点。直接改对应文件、保存，看页面变化和**终端/浏览器控制台报错**，就能验证语法对不对。
每个示例底部都有一段注释说明要点（含和 Vue 的对照）。

## 和你公司项目的差异
- 本项目用 **React 18 + createRoot**；你公司项目是 **React 17 + Umi 3**，挂载是 `ReactDOM.render(<App/>, document.getElementById('root'))`。
- 本项目是 Vite 纯 React；公司项目被 Umi 包了一层（约定路由、dva、umi-request 等），**组件内部写法一致，框架外壳不同**。
- 对照公司栈，见工作空间下的 `react/React17学习汇总.md` 和 `umi/umi知识汇总.md`。

## 常见报错排错
- 组件名写成小写 → 组件名必须大写开头。
- 直接 `count++` 页面不更新 → 必须用 `setCount`。
- 列表警告 "each child should have a key" → map 时加 `key={唯一id}`。
- 输入框能输入但 state 不更新 → 受控组件忘了写 `onChange`。
