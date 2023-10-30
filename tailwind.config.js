/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FFC24B",
        secondary: "#EF4444",
      },
      textColor: {
        primary: "#EF4444",
      },
      outlineColor: {
        primary: "#EF4444",
      },
      borderColor: {
        primary: "#EF4444",
      },
    },
    screens: {
      'xs': '320px',
      'sm': '578px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};
