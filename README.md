## Bulat Gareev – Portfolio Website

Personal portfolio built with **Next.js 14**, **React 18**, **TypeScript 5**, and **Tailwind CSS 3**.  
It showcases my projects, skills, education timeline, and hobbies while serving as a playground for UI experiments.

---

## ✨ Features

- **Hero** – profile photo, CV download, quick social links  
- **About** – “Who I Am”, Education, Skills, Values (animated cards)  
- **Projects** – responsive cards with screenshots & tech-stack icons  
- **Experience Road-map** – vertical timeline of education & shipped apps  
- **Hobbies** – guitar covers, gym photos, short posts  
- **Contact** – gradient email form with validation  

---

## 🏗 Tech Stack

| Layer            | Stack                                   |
|------------------|-----------------------------------------|
| **Framework**    | Next.js 14 (App Router)                 |
| **Language**     | TypeScript 5                            |
| **Styling**      | TailwindCSS3 + custom `@layercomponents`|
| **State / Anim** | React 18 · Framer Motion                |
| **Lint / Format**| ESLint 8 (Strict) · Prettier            |

---

## Prerequisites  
- **Node 18 or newer**  
- npm / pnpm / Yarn

```bash
# clone repository
git clone https://github.com/gareev-bulat/portfolio-website.git
cd portfolio-website

# install dependencies
npm install

# start the dev server
npm run dev

## Available Scripts

| Script | Description                          |
|--------|--------------------------------------|
| `npm run dev`   | Starts dev server (`next dev`) |
| `npm run build` | Creates production build       |
| `npm start`     | Runs the production build      |
| `npm run lint`  | ESLint check (Strict)          |

---
```


## Project Structure

- app/ – App Router pages & layouts

  - page.tsx – Landing / Hero
  - experience/ – Road-map timeline

  - hobbies/ – Hobbies gallery

- components/ – Reusable UI (Card, TimelineItem, Navbar …)

- public/images/ – Optimised PNG/SVG assets

- styles/globals.css – Tailwind directives + custom @layer components