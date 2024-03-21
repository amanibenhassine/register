/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#a8dadc",
        "dark-blue": "#1d3557",
        white: "#f1faee",
      },
      spacing: {},
      fontFamily: {
        "body-text-1-bold": "'Segoe UI'",
        "caption-regular": "'Open Sans'",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      "9xl": "28px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
