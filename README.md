# 项目名称

> 一句话说明这个项目是做什么的。

## 环境要求

- Node.js >= 22（本机验证版本 v22.22.2）
- npm >= 10

## 快速开始

```bash
npm install      # 安装依赖
npm run dev      # 开发运行（自动重载）
npm test         # 运行测试
npm run build    # 编译到 dist/
npm start        # 运行编译产物
```

## 目录结构

```
.
├── src/
│   ├── index.ts        # 入口
│   └── index.test.ts   # 测试
├── dist/               # 编译产物（已忽略）
├── package.json        # 依赖清单
├── tsconfig.json       # TypeScript 配置
├── README.md
└── .gitignore
```

## 分支约定

- `main`：稳定分支，随时可发布
- `feature/*`：功能分支，通过 Pull Request 合并

## 提交信息规范

`<类型>: <简述>`，类型取 `feat` / `fix` / `docs` / `refactor` / `chore`。
