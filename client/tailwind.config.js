module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        50: "0.5",
        75: "0.75",
        90: "0.9",
        95: "0.95",
        100: "1",
        180: "1.8",
        200: "2",
        300: "3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
