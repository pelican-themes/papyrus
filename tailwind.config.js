module.exports = {
    darkMode: 'class',
    content: ["./templates/*.{html,js}"],
    theme: {
    extend: {
        fontFamily: {
          sans: ['-apple-system','BlinkMacSystemFont','"segoe ui"','Roboto','Oxygen','Ubuntu','Cantarell','"open sans"','"helvetica neue"','"sans-serif"'],
          'display': ['Georama',]
        },
      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
