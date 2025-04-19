# CodeSnippets Pro - Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-brightgreen?logo=vercel)](https://codesnippets-landing-xxxx.vercel.app) A responsive landing page for "CodeSnippets Pro", a fictional cloud-based code snippet manager designed for developers. This project serves as a portfolio piece showcasing modern web development practices using Nuxt 3 and Tailwind CSS.

![CodeSnippets Pro Landing Page Screenshot](screenshot.png) **Live Demo:** [https://codesnippets-landing-xxxx.vercel.app](https://codesnippets-landing-xxxx.vercel.app) ## Description

CodeSnippets Pro (a fictional product) aims to help developers organize, find, and reuse their trusted code patterns instantly, serving as an essential companion to modern development workflows, including AI code generation tools. This landing page highlights its core features and value proposition.

The primary purpose of building this project was to practice and demonstrate skills in:
* Modern Frontend Frameworks (Nuxt 3 / Vue 3)
* Static Site Generation (SSG)
* Utility-First CSS (Tailwind CSS)
* Component-Based Architecture
* Responsive Web Design
* Version Control (Git/GitHub)
* Automated Deployment (Vercel)

## Features (Landing Page Sections)

* **Navbar:** Simple navigation with logo and primary Call-to-Action (CTA).
* **Hero Section:** Compelling headline, sub-headline, and primary CTA introducing the product.
* **Key Features:** A responsive grid showcasing 4 core product features with icons and descriptions.
* **Call to Action Section:** A final prompt for user conversion.
* **Footer:** Basic footer with copyright information.
* **Responsive Design:** Adapts to various screen sizes from mobile to desktop.

## Tech Stack

* **Framework:** [Nuxt 3](https://nuxt.com/) (using Vue 3 Composition API `<script setup>`)
* **Rendering:** Static Site Generation (SSG) via `npm run generate`
* **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
* **Icons:** [Nuxt Icon](https://nuxt.com/modules/icon) (using Heroicons via Iconify)
* **Linting:** ESLint via [@nuxt/eslint](https://nuxt.com/modules/eslint)
* **Deployment:** [Vercel](https://vercel.com/)

## Setup and Running Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)[your-github-username]/[your-repo-name].git
    cd [your-repo-name]
    ```
    *(Replace `[your-github-username]` and `[your-repo-name]`)*

2.  **Install dependencies:**
    ```bash
    npm install
    # or using npm ci for cleaner installs if package-lock.json is tracked
    # npm ci
    ```

3.  **Run the development server:**
    (Hot-reloading at `http://localhost:3000`)
    ```bash
    npm run dev
    ```

4.  **Build for static deployment:**
    (Generates static files in `.output/public/`)
    ```bash
    npm run generate
    ```

5.  **Preview the static build locally:**
    (Serves the generated static files)
    ```bash
    npx serve .output/public
    ```

## Deployment

This project is automatically deployed to Vercel upon pushes to the `main` branch via GitHub Actions integration configured in `.github/workflows/deploy.yml`.

The live deployment can be viewed at: [YOUR_VERCEL_DEPLOYMENT_URL](https://codesnippets-landing-xxxx.vercel.app) ## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

*(Disclaimer: The product "CodeSnippets Pro" is fictional and created for demonstration purposes only.)*
