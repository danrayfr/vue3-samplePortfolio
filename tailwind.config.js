module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
          'work-sans': [ 'Work Sans', 'sans-serif' ],
      },
      colors: { 
        'primary': '#5788C6',
        'black': '#181818',
        'white': '#FFFFFE',
        'background': '#FAFAFD'
        
      },
      height: {
        "400px": "400px",
        "600px": "600px",
      },
      flexGrow: { 
        '2' : 2,
      },
    },
  },
  plugins: [],
}