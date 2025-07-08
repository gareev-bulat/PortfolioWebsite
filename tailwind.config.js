const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 8px rgba(2,201,242,0.7), 0 0 16px rgba(2,201,242,0.5)",
      },

      fontFamily: {
        roboto: ["var(--font-roboto)", ...defaultTheme.fontFamily.sans],
        sans: ["var(--font-roboto)", ...defaultTheme.fontFamily.sans],
      },

      spacing: {
        0: "0px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        header: "80px",
      },

      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "40px" }],
        base: ["18px", { lineHeight: "24px" }],
        base_l: ["22px", {lineHeight: '28px'}],
        lg: ["28px", { lineHeight: "28px" }],
        h1: ["40px", { lineHeight: "45px" }],
      },

      borderRadius: {
        DEFAULT: "30px",
        lg: "50px",
        pill: "9999px",
      },

      colors: {
        brand: {
          300: "#2868B2", //dark-blue
          500: "#024950",  //dark-green
          700: "#003135", //darkest-green
          900: "#964734", //brown
          1000: "#E64833", //red
          0: "#000000", //black
          200: "#FBE9D0", //milk-color
        },
      },

      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
