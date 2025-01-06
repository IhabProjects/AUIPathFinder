/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#1A502F',
          600: '#1A502F',
          700: '#1A502F',
          800: '#1A502F',
          900: '#1A502F',
        },
        'surface': {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
        }
      },
      boxShadow: {
        'notion': '0 1px 3px rgba(0,0,0,0.12)',
        'notion-hover': '0 3px 6px rgba(0,0,0,0.15)',
      },
      opacity: {
        '15': '0.15',
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  plugins: [],
}
