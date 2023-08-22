// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        outfit: "Outfit, sans-serif", // Add the "Outfit" font family here
      },
    },
  },
  plugins: [],
};
