/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // main:'rgb(239 68 68 / var(--tw-bg-opacity))'
      }
    },
  },
  plugins: [require('daisyui'),],
}

