// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // User-defined Screen
      mobile: { max: "580px" },
      "max-lg": { max: "975px" },
      tablet: { min: "977px", max: "1670px" },
      // ---end ----
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      "max-md": { max: "768px" },
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "976px",
      // => @media (min-width: 1024px) { ... }

      xl: "1100pxpx",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1336px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1580px",
    },
    extend: {
      textColor: {
        link: "#F037A5",
      },
    },
  },
  variants: {
    extend: {},
  },
  prefix: "",
  plugins: [],
};
