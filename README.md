# Next.js Boilerplate

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?logo=tailwindcss)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-ready-000000)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Next.js 15 + React 19 + TypeScript 기반의 보일러플레이트입니다.  
Tailwind CSS v4와 shadcn/ui를 포함하여 빠르게 프로젝트를 시작할 수 있습니다.

---

## 🚀 Features
- ⚡ Next.js 15 (App Router)
- ⚛ React 19
- 📝 TypeScript
- 🎨 Tailwind CSS v4 + shadcn/ui
- 🧹 ESLint, Prettier, Husky, lint-staged
- 💾 Storage Wrappers
- 🪵 Logger Service
- 🛠 Utility Functions

---

## 📦 Getting Started

### Requirements
- Node.js 18+
- [pnpm](https://pnpm.io/) (권장)

### Installation
```bash
git clone https://github.com/kkkwp/nextjs-boilerplate
cd boilerplate-nextjs
pnpm install
```

### Developement
```bash
pnpm dev
```
브라우저에서 [http://localhost:3000](http://localhost:3000) 확인

### Build
```bash
pnpm build
pnpm start
```

---

## 📂 Project Structure
```
src/
├── app/                   # Next.js App Router
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/                # shadcn/ui Component
├── lib/
│   └── utils.ts           # Utilities
└── services/
    ├── local-storage.ts   # LocalStorage Wrapper
    ├── session-storage.ts # SessionStorage Wrapper
    └── logger.ts          # Logger Service
```

---

## 📝 Scripts
| Command      | Description             |
| ------------ | ----------------------- |
| `pnpm dev`   | Start dev server        |
| `pnpm build` | Build for production    |
| `pnpm start` | Run production server   |
| `pnpm lint`  | Run ESLint              |
| `pnpm ui`    | Add shadcn/ui component |


---

## 📘 Guide

👉 자세한 사용 가이드는 [GUIDE.md](./GUIDE.md)를 참고하세요.

(컴포넌트 추가, Storage, Logger, 코드 품질 규칙, Tailwind/ESLint/Prettier 설정 등)
