/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5BB6E7',
        secondary: '#FFFFFF',
        accent: '#2A4B8C',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #5BB6E7, #2A4B8C)',
      },
    },
  },
  plugins: [],
};
