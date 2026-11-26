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
    extend: {
      colors: {
        brand: {
          // Light Mode — Seashell & Obsidian
          'bg':        '#F9F5ED',
          'surface':   '#EFE9DD',
          'text':      '#2A2A2A',
          'muted':     '#5C5A55',
          'accent':    '#5E83AE',
          'border':    '#E2DBD0',
          // Dark Mode — Deep Midnight Denim
          'dark-bg':       '#171B21',
          'dark-surface':  '#20262E',
          'dark-text':     '#F9F5ED',
          'dark-muted':    '#9AA5B4',
          'dark-accent':   '#769BC7',
          'dark-border':   '#2D3540',
        }
      }
    },
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
