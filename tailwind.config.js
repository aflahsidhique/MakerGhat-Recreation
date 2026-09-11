/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mg: {
          purple: '#4a3a80',
          ink: '#362c5f',
          green: '#58ad6f',
          cream: '#f9f4e8',
          panel: '#f4ead5',
          sand: '#ecd8aa',
          coral: '#f1805e',
        },
      },
      fontFamily: {
        display: ['Parkinsans', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 4px 4px rgba(0, 0, 0, .25)',
        tab: '0 4px 2px rgba(0, 0, 0, .25)',
        year: '0 2px 0 rgba(74, 58, 128, .05)',
      },
      keyframes: {
        'arrow-color-loop': {
          '0%, 100%': { filter: 'hue-rotate(0deg) saturate(1)' },
          '50%': { filter: 'hue-rotate(-24deg) saturate(1.65) brightness(.94)' },
        },
      },
      animation: {
        'arrow-color-loop': 'arrow-color-loop 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
