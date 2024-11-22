/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include your root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all source files in your project
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff', 
        bbyblue: '#9BC4D5',
        book:'#D9D9D9',
      },
    },
  },
  plugins: [],
};
