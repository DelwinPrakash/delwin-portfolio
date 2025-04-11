/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // If you're using the /app folder
    "./pages/**/*.{js,ts,jsx,tsx}",     // For pages directory
    "./components/**/*.{js,ts,jsx,tsx}" // For your components like GradientText
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
      },
    },
  },
  plugins: [],
};
