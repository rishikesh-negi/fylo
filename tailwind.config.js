/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "23.75em" /* 380px */,
      sm: "30em" /* 480px */,
      md: "37.5em" /* 600px */,
      lg: "56.25em" /* 900px */,
      xl: "75em" /* 1200px */,
      "2xl": "87.5em" /* 1400px */,
      big: "100em" /* 1600px */,
    },
    extend: {
      colors: {
        darkBlue: "hsl(217 , 28%, 15%)",
        darkBlue1: "hsl(218 , 28%, 13%)",
        darkBlue2: "hsl(216 , 53%, 9%)",
        darkBlue3: "hsl(219 , 30%, 18%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentBlue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "logo-dark-mode": "url('../images/logo-dark-mode.svg')",
        "logo-light-mode": "url('../images/logo-light-mode.svg')",
        "curvy-dark-mode": "url('../images/bg-curvy-dark-mode.svg')",
        "curvy-light-mode": "url('../images/bg-curvy-light-mode.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
