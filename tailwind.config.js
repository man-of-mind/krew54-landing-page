/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,jsx,tsx}"],
  theme: {
    colors: {
      white: {
        "100": "rgba(248, 247, 236, 1)",
      },
      green: {
        "100": "#1F6363"
      },
    },
    extend: {},
  },
  plugins: [],
};
