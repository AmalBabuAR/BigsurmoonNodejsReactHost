// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto, sans-serif",
        outfit: "Outfit, sans-serif",
        inter: "Inter, sans-serif", // Add the "Outfit" font family here
      },
    },
    boxShadow: {
      "3xl": "0px 0px 50px 0px rgba(0, 0, 0, 0.25)",
    },
  },
  plugins: [],
};
