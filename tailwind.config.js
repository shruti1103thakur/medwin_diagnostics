module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CC0000',
        'primary-dark': '#990000',
        dark: '#0A0A0A',
        'dark-2': '#111111',
        'dark-3': '#1A1A1A',
        'gray-muted': '#888888',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Barlow', 'sans-serif'],
        mono: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: { extend: {} },
//   plugins: [],
// }