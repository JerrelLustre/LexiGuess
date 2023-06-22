module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      "colors": {
       "base": "#6798d0",
       "card": "#ffe39c",
       "white": "#f2f2f2",
       "correct": "#4dba1a",
       "fail": "#ec5565"
      },
      "fontSize": {
       "base": "1rem",
       "lg": "1.25rem",
       "xl": "3rem"
      },
      "fontFamily": {
       "roboto": "Roboto",
       "pacifico": "Pacifico"
      },
      "boxShadow": {
       "base-shadow": "0px 2px 16px 0px rgba(14,30,37,0.32), 0px 2px 4px 0px rgba(14,30,37,0.12)",
       "crd-shadow": "0px 2px 4px -1px rgba(0,0,0,0.06), 0px 4px 6px -1px rgba(0,0,0,0.1)"
      },
      "borderRadius": {
       "default": "1.25rem",
       "lg": "2.5rem"
      }
     },
  },
  plugins: [],
}

