/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f8faff",
        link: "#346bd4",
        "secondary-text": "#858585",
        "light-gohan": "#fff",
        mediumslateblue: {
          "100": "#807dff",
          "200": "#7a75ff",
          "300": "#605bff",
        },
        "field-color-darker": "#eaeaea",
        darkgray: {
          "100": "#9a9",
          "200": "#999",
        },
        black: "#000",
        background: "#f5f5f5",
        gray: {
          "100": "#fafafb",
          "200": "#101223",
        },
        lightgreen: "rgba(133, 224, 147, 0.12)",
        limegreen: "rgba(74, 209, 95, 0.32)",
        "dark-trunks": "#999ca0",
        "light-popo": "#231f20",
        "light-piccolo-piccolo": "#0e6fff",
        darkolivegreen: "#533f0c",
        tomato: "#ff5757",
        darkslategray: "#0c2d4a",
        dodgerblue: {
          "100": "#5b93ff",
          "200": "#1b99fb",
        },
        lightgray: "#d2d4da",
        "light-beerus-hover": "rgba(0, 0, 0, 0.08)",
        text: "#030229",
        "supportive-dodoria-100": "#d33030",
        "light-beerus-beerus": "#f2f2f2",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        montserrat: "Montserrat",
        nunito: "Nunito",
        "paragraph-ui-type-text-md-s": "Figtree",
        "figma-hand": "'Figma Hand'",
        "instagram-sans-condensed": "'Instagram Sans Condensed'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "31xl": "50px",
        "69xl": "88px",
        lg: "18px",
        "41xl": "60px",
        "8xs": "5px",
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "16px",
      "3xs": "10px",
      xs: "12px",
      "5xl": "24px",
      xl: "20px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq625: {
        raw: "screen and (max-width: 625px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
