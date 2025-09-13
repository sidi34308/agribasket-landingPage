/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#61C02F',      
        secondary: '#2A6C79',    
        background: '#F6F6F6',  
      },
    },
  },
  plugins: [],
};
