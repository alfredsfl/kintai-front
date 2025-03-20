/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,jsx,ts,tsx,vue}",
    "./layouts/**/*.{js,jsx,ts,tsx,vue}",
    "./pages/**/*.{js,jsx,ts,tsx,vue}",
    "./features/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
    minHeight: {
      '0': '0.0rem',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1.0rem',
      '10': '10.0rem',
      '20': '15.0rem',
      '30': '20.0rem',
      'full': '100%',
      'screen': '100vh',
    },
    minWidth: {
      '0': '0.0rem',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1.0rem',
      '10': '10.0rem',
      '20': '15.0rem',
      '30': '20.0rem',
      '96': '24.0rem',
      'full': '100%',
      'screen': '100vh',
    },
  },
  plugins: [],
}

