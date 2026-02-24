# Claw Marketplace

> 🏪 The open-source marketplace for AI agent templates.

[![CI](https://github.com/mxn2020/claw-marketplace/actions/workflows/ci.yml/badge.svg)](https://github.com/mxn2020/claw-marketplace/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Browse, install, and share AI agent templates for your OpenClaw instance.

## ✨ Features

- **🔍 Browse & Search** — Filter templates by category, sort by downloads/stars
- **📦 One-Click Install** — Install agent templates into your OpenClaw instance instantly
- **📤 Publish** — Share your custom agent templates with the community
- **🏷️ Categories** — Orchestrators, Specialists, Utilities, Workflows, Integrations
- **🌗 Dark & Light Mode** — Toggle between themes
- **✅ Verified Badges** — Trusted templates from the OpenClaw team

## 🚀 Quick Start

```bash
git clone https://github.com/mxn2020/claw-marketplace.git
cd claw-marketplace
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 🧪 Testing

```bash
npx vitest run        # run all tests
npx vitest            # watch mode
```

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Backend**: Convex
- **Styling**: Vanilla CSS (warm sunset palette)
- **Testing**: Vitest + React Testing Library
- **Font**: Plus Jakarta Sans

## 📁 Project Structure

```
claw-marketplace/
├── convex/              # Convex backend
│   ├── schema.ts        # templates, reviews, installations, categories
│   ├── templates.ts     # Query functions
│   └── seed.ts          # 12 starter templates
├── src/
│   ├── components/      # Header, Footer, ThemeToggle
│   ├── pages/           # Landing, Browse, Categories, Publish, About
│   ├── test/            # Vitest test suite
│   ├── index.css        # Design system
│   └── App.tsx          # Router
├── .github/workflows/   # CI + Release
└── LICENSE              # MIT
```

## 📄 License

MIT © [Mehdi Nabhani](https://github.com/mxn2020)

---

**[⭐ Star on GitHub](https://github.com/mxn2020/claw-marketplace)** · **[☕ Buy Me a Coffee](https://buymeacoffee.com/mxn2020)**
