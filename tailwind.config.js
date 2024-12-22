/** @type {import('tailwindcss').Config} */
export default {
  content: [
   './index.html',         // for regular HTML files
    './src/**/*.{js,jsx,ts,tsx}',  // for React/JSX/TSX files in the 'src' folder
    './public/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

