/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0D1B2E',
          800: '#122035',
          700: '#1A2E48',
          600: '#1E3A5F',
        },
        brand: {
          orange: '#F5A623',
          'orange-dark': '#D4891A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
