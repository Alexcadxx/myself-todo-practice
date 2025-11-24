# ReactVite SWC  Template

Starter template for building modern **React** apps with **Vite** and **SWC (JavaScript)**.  
Includes Prettier + ESLint + EditorConfig preconfigured for a clean dev workflow.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## ✨ Features

- ⚡ Fast bundling with [Vite](https://vitejs.dev/)
-  Super-fast builds via [SWC](https://swc.rs/)
- 粒 Preconfigured ESLint + Prettier + EditorConfig
-  VSCode integration with recommended settings

##  Quick Start

1. **Generate a new project** from this template:  
   [Use this template](https://github.com/Alexcadxx/react-vite-swc-template/generate)  
   or via CLI:

   ```bash
 gh repo create my-new-app --template Alexcadxx/react-vite-swc-template --public

   ```

2. **Clone your new repo:**

git clone https://github.com/Alexcadxx/my-new-app.git
cd my-new-app

3. **Install dependencies:**

npm install

4. **Start dev server:**

npm run dev
