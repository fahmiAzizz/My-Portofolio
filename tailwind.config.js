/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''), 
    files:[ 
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}