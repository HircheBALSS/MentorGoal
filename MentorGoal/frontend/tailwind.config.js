/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-90': '#2a4054',
        'dark-blue-80': '#2d4459',
        'dark-blue-70': '#3c5b78',
        'dark-blue-60': '#466a8b',
        'dark-blue-50': '#7590A8',
        'grayish-cyan-30': '#bfe2e1',
        'badge-lm': '#fdf0e4',
        'badge-text-lm': '#DE6D0F',
        'badge-cv': '#E9F5F4',
        'badge-text-cv': '#4ba398',
        'badge-entretien': '#F8EDD2',
        'badge-text-entretien': '#d5a019',
        'badge-categorie': '#FBE6E1',
        'badge-text-categorie': '#CA3F1C',
        'badge-autre_categorie': '#c8d3dc',
        'badge-text-autre_categorie': '#2A4054',
        'badge-categorie2': '#E9F5E4',
        'badge-text-categorie2': '#529339',
        'arrow-forward': '#F4A261',
      },
      backgroundImage: {
        'gradient-1':
          'linear-gradient(115.5deg, #2a4054 0%, #2d4459 35.75%, #3c5b78 82.39%, #466a8b 99.49%)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
};
