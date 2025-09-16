/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPurple: "#C084FC",
        brandBlue: "#60A5FA",
      },
      backgroundImage: {
        'gradient-brand': "linear-gradient(90deg, #C084FC, #60A5FA)"
      }
    },
  },
  // tailwind.config.js
extend: {
  animation: {
    'spin-slower': 'spin 60s linear infinite', // one full orbit per 60s
    'spin-slower': 'spin 60s linear infinite',
    'gradient': 'gradientShift 6s ease infinite',
    'float': 'floaty 8s ease-in-out infinite',
  },
  keyframes: {
    gradientShift: {
      '0%, 100%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
    },
    floaty: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-20px)' },
    },
  },


},
  plugins: [],
}
