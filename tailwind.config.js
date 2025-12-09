/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        // Overriding default blue to Navy #15254F (RGB 21, 37, 79)
        blue: {
          500: '#15254F',
          600: '#15254F',
        },
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // Updated to RGB(21, 37, 79) -> Hex #15254F
          800: '#15254F', 
          900: '#15254F',
          950: '#020617',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}