# Jinpeng Nepal — Lingbox EV (`jinpengnepal.com`)

Official web platform for **Jinpeng Lingbox AT**, distributed in Nepal by **Synergy Motors**. Engineered for the unique topography and urban driving conditions of Kathmandu Valley.

---

## ⚡ Verified Specifications & Model Lineup

All technical specifications, vehicle pricing, and showroom details adhere strictly to official **Jinpeng × Synergy Motors** poster data:

- **Base Variant:** NPR 23,49,000 · 240 km Range · 35 kW Electric Motor · 175 mm Ground Clearance
- **Top Variant (Premium):** NPR 25,99,000 · 340 km Range · DC Fast Charging · 175 mm Ground Clearance
- **Financing:** Open for Booking · Easy EMI · Monthly EMI starting from NPR 20,500
- **Official Showroom:** Balkumari, Lalitpur, Nepal · `+977 9714574057` / `+977 9849130768`

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom dark automotive studio design tokens
- **Motion & Interaction:** [GSAP 3](https://greensock.com/gsap/) (ScrollTrigger) synchronized with [Lenis](https://github.com/darkroomengineering/lenis) smooth scrolling
- **Typography:** `Space Grotesk` (editorial wordmark & stats) + `DM Sans` (UI & body)
- **Testing:** [Vitest](https://vitest.dev/) enforcing automated data integrity unit tests
- **Code Review & Quality:** [CodeRabbit](https://coderabbit.ai/) integration via `.coderabbit.yaml`

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/Biraj687/jinpeng.git
cd jinpeng

# Install dependencies
npm install --legacy-peer-deps
```

### Running Locally

```bash
# Start Next.js development server
npm run dev

# Start development server bound to LAN (accessible on network)
npm run dev -H 0.0.0.0 -p 3000
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🧪 Quality Assurance & Testing

```bash
# Typecheck TypeScript codebase
npm run typecheck

# Run ESLint quality checks
npm run lint

# Run automated Vitest test suite
npm run test

# Build production bundle
npm run build
```

---

## 🐇 CodeRabbit Integration

This repository includes [`.coderabbit.yaml`](./.coderabbit.yaml) to automate AI-driven code reviews on every pull request to `main`/`master`, checking for:
- AST semantic differences
- OWASP security vulnerabilities
- Performance bottlenecks & React re-render churn
- Strict data integrity compliance (`AGENTS.md`)

---

## 📄 License

Proprietary — Jinpeng Nepal · Synergy Motors. All rights reserved.
