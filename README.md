# Héctor Salvador — Portfolio

Personal portfolio built with Angular, showcasing backend and full-stack projects, professional experience, and technical skills. Designed with a precision-instrument / blueprint aesthetic to match a systems-engineering identity.

**Live site:** https://portfolio-hector-contreras.netlify.app/

![Angular](https://img.shields.io/badge/Angular-19-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-8B94A0)

---

## Overview

This is a single-page application built with standalone Angular components, covering:

- **Home** — hero introduction with role, availability status, and quick links
- **About** — background, education, and working philosophy
- **Skills** — technical stack grouped by category, plus certifications
- **Experience** — professional history with image carousels per role
- **Projects** — featured work with live demo / source links and screenshot galleries
- **Contact** — direct contact details and a message form

## Tech stack

- **Framework:** Angular 19 (standalone components, `@for`/`@if` control flow)
- **Language:** TypeScript
- **Styling:** Plain CSS (component-scoped), custom design system (no UI framework)
- **Fonts:** Space Grotesk, IBM Plex Sans, IBM Plex Mono

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)

### Installation

```bash
git clone https://github.com/HectorCntrs/portfolio_HC.git
cd portfolio_HC
npm install
```

### Development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically on file changes.

### Build

```bash
ng build
```

Build artifacts are output to `dist/`.

## Project structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── home/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── contact/
│   │   └── footer/
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/
│   ├── experience/
│   └── projects/
└── styles.css
```

## Contact

- **Email:** hector12ca.dev@gmail.com
- **LinkedIn:** [linkedin.com/in/hector-salvador-contreras-álvarez](https://www.linkedin.com/in/hector-salvador-contreras-álvarez-768285363)
- **GitHub:** [github.com/HectorCntrs](https://github.com/HectorCntrs)

## License

This project is licensed under the MIT License — feel free to use it as a reference for your own portfolio, but please don't republish the content or images as your own.
