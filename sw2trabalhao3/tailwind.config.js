/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],  
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#641ae6",
          "secondary": "#db2777",
          "accent": "#1fb2a6",
          "neutral": "#2a323c",
          "base-100": "#1d232a",
          "info": "#3abff8",
          "success": "#22c55e",
          "warning": "#fbbd23",
          "error": "#be123c",
        },
      },
    ],
  },
}

