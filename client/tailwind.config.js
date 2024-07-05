/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  heme: {
    extend: {
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(2.5)' },
          '50%': { transform: 'scale(3)' },
        },
      },
      animation: {
        scale: 'scale 8s infinite',
      },
    },
  },
  plugins: [],
}