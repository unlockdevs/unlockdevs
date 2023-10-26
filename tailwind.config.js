/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "red_imperial": "#FF0037",
        "white_light": "#FDFFFE",
        "night": "#0E0C0F",
        "eerie_black": "#19181A",
      }
    },
  },
  plugins: [],
}

