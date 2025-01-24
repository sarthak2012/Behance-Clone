# Behance Clone
This Project is a Behance Clone Build using React.js with vite and Using TailwindCSS.
This Website is a replication of Behance showcasing it's eligant Design and Functionality.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Technologies Used
1. React +Vite
2. Tailwind CSS
3. Node.js [Mandatory (>=v12.x)]

# Prerequisites

1. Node.js [>=version 12.x]
2. npm [Node Package Manager]
3. Git[Optional]

# Installation
1. cd ./[your directory]
2. npm create vite@latest
3. npm install
4. npm run dev

# Configuration + Installations

5. npm i react-icons
6. npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
7. Update: 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
8. Update Index.css:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
9. npm run dev [restart server]

# Deployment

10. npm run build [creates a dist file].
11. Upload the dist file on Netlify.

The deploy link is https://behance-clone-kingstar.netlify.app/

Save this content as `README.md` in the root directory of your project. This file will provide a comprehensive guide for anyone who wants to understand, set up, and run your Behance clone project.

