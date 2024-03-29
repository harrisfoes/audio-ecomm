/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "creamy-900": "#D87D4A",
      "creamy-300": "#FBAF85",
      "neutral-000": "#FFFFFF",
      "neutral-100": "#FAFAFA",
      "neutral-200": "#F1F1F1",
      "neutral-400": "#CFCFCF",
      "neutral-800": "#101010",
      "neutral-900": "#000000",
      "error-red": "#CD2C2C",
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "header-mobile": "url('/src/assets/home/mobile/image-header.jpg')",
        "header-tablet": "url('/src/assets/home/tablet/image-header.jpg')",
        "header-desktop": "url('/src/assets/home/desktop/image-hero.jpg')",
        circles: "url('/src/assets/home/desktop/pattern-circles.svg')",
      },
    },
  },
  plugins: [],
};
