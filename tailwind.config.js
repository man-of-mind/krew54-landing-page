/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,jsx,tsx}"],
  theme: {
    colors: {
      white: {
        "100": "rgba(248, 247, 236, 1)",
        "90": "rgba(248, 247, 236, 1)",
//        "90": "rgba(214, 214, 214, 1)"
      },
      green: {
        "100": "#1F6363"
      },
    },
    extend: {
      screens: {
        'md': '852px',
        'xx': '334px',
      },
    },
  },
  plugins: [],
};
