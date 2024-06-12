/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        'customorange': 'hsl(26, 100%, 55%)'
      },
      fontFamily: {
        'poetsenone': ['Poetsen One', 'sans-serif']
      },
      width: (() => {
        const widthScale = {};
        for (let i = 1; i <= 100; i++) {
          widthScale[i] = `${i * 0.25}rem`;
        }
        return widthScale;
      })(),
    },
  },
  variants: {},
  plugins: [],
}