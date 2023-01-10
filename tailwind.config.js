module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
    },
    extend: {
      colors: {
        first: "#F9E4D4",
        second: "#D67D3E",
        third: "#9C0F48",
        fourth: "#470D21",
      },
    },
  },
  plugins: [],
};
