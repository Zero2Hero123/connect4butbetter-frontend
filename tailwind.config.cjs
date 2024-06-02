/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        aspectRatio: {
          'board': '1.08333333333'
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        insert: {
          '0%': { translate: '0px -300px' },
          '50%': { translate: '0px 0px' },
        },
        growIn: {
          '0%': {scale : '0'},
          '20%': {scale: '1.3'},
          '40%': {scale: '0.8', rotate: '380deg'},
          '60%': {scale: '0'},
          '100%': {scale: '0', }
        },
        slide: {
          '0%': {translate: '0 0'},
          '100%': {translate: '-5000px -5000px'}
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        insertChip: 'insert 1s ease-in-out',
        growIn: 'growIn 4s ease-in-out forwards',
        slide: 'slide 400s linear infinite'
      },
      backgroundImage: {
        'chip-pattern': "url('/assets/pattern.png')"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}