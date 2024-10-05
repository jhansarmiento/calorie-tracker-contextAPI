/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#2196F3",
        "secondary": "#FFA07A",
        "background-color": "#F7F7F7",
        "text-color": "#333333",
        "progress-color": "#1A237E",
        "alternative": "#2531B3",
      },
    },
  },
  plugins: [],
};
