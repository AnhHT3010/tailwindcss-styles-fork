/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif'],
      },
      colors: {
        'light-coffee': "#c89f94"
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
      },
      backgroundImage: {
        "slide_bg": "url('./img/slide_bg.jpg')",
      }
    },
  },
  plugins: [],
}

