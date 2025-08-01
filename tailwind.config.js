/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['NotoSansCondensed-Regular', 'system-ui', 'sans-serif'],
        'noto-light': ['NotoSansCondensed-Light'],
        'noto-medium': ['NotoSansCondensed-Medium'],
        'noto-bold': ['NotoSansCondensed-Bold'],
        'noto-semibold': ['NotoSansCondensed-SemiBold'],
        'noto-black': ['NotoSansCondensed-Black'],
      },
      colors: {
        'french_gray': {
          DEFAULT: '#b8b8d1',
          100: '#1f1f30',
          200: '#3e3e5f',
          300: '#5d5d8f',
          400: '#8989b2',
          500: '#b8b8d1',
          600: '#c6c6da',
          700: '#d4d4e3',
          800: '#e3e3ec',
          900: '#f1f1f6'
        },
        'ultra_violet': {
          DEFAULT: '#5b5f97',
          100: '#12131e',
          200: '#24263c',
          300: '#36385a',
          400: '#484b78',
          500: '#5b5f97',
          600: '#787bae',
          700: '#9a9cc2',
          800: '#bbbdd6',
          900: '#dddeeb'
        },
        'xanthous': {
          DEFAULT: '#ffc145',
          100: '#412c00',
          200: '#835700',
          300: '#c48300',
          400: '#ffac06',
          500: '#ffc145',
          600: '#ffce6c',
          700: '#ffda91',
          800: '#ffe7b6',
          900: '#fff3da'
        },
        'baby_powder': {
          DEFAULT: '#fffffb',
          100: '#656500',
          200: '#caca00',
          300: '#ffff30',
          400: '#ffff95',
          500: '#fffffb',
          600: '#fffffb',
          700: '#fffffc',
          800: '#fffffd',
          900: '#fffffe'
        },
        'light_red': {
          DEFAULT: '#ff6b6c',
          100: '#480000',
          200: '#910000',
          300: '#d90000',
          400: '#ff2323',
          500: '#ff6b6c',
          600: '#ff8989',
          700: '#ffa6a6',
          800: '#ffc4c4',
          900: '#ffe1e1'
        }
      },
    },
  },
  plugins: [],
}