// tailwind.config.js
module.exports = {
  future: {},
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  purge: {
    options: {
      safelist: ['dark'],
    },
  },
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      }
    },
  },
  variants: {},
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}
