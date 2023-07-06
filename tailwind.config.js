/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sb-03': '#f9f9f9',
        'sb-02': '#1e3932',
        'sb-01': '#d4e9e2',
      },
      fontfamily: {
        Google1: ['PT Sans', 'sans-serif'],
      }

    },
   
    
  },
  plugins: [],
}

