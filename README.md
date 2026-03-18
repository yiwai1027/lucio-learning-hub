# React Boilerplate

一个开箱即用的 React + TypeScript 脚手架

## 技术栈

- React 19
- TypeScript
- Vite
- React Router
- TanStack Query
- Zustand
- Ant Design
- ESLint + Prettier
- Husky + lint-staged

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build

# 预览
npm run preview

# 代码格式化
npm run format

# 代码检查
npm run lint
npm run lint:fix
```

## 项目结构

```
src/
├── api/           # API 请求封装
├── assets/        # 静态资源
├── components/    # 公共组件
├── hooks/         # 自定义 Hooks
├── pages/         # 页面组件
├── router/        # 路由配置
├── store/         # 状态管理 (Zustand)
├── types/         # TypeScript 类型定义
├── utils/         # 工具函数
├── App.tsx
└── main.tsx
```

## 特性

- ✅ TypeScript 类型安全
- ✅ ESLint + Prettier 代码规范
- ✅ Git 提交前自动格式化
- ✅ Ant Design 组件库
- ✅ 路由懒加载
- ✅ Zustand 状态管理
- ✅ TanStack Query 数据请求
- ✅ 绝对路径配置

## 开发

### 添加页面

1. 在 `src/pages/` 下创建组件
2. 在 `src/router/index.tsx` 中配置路由

### 状态管理

使用 Zustand，在 `src/store/` 中创建 store：

```typescript
import { create } from 'zustand';

export const useYourStore = create((set) => ({
  // state
}));
```

### API 请求

在 `src/api/` 中使用封装好的 axios 实例

## License

MIT
