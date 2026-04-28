/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1A237E', // Dark blue text
          green: '#10B981', // Green accent
          saffron: '#F97316', // Saffron accent
          light: '#F8FAFC',
          hover: '#EEF2FF',
          border: '#E2E8F0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'intent': '0 0 0 1px rgba(99, 102, 241, 0.2), 0 4px 6px -1px rgba(99, 102, 241, 0.1)',
      }
    },
  },
  plugins: [],
}
