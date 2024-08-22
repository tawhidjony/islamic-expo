/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./uikit/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f0fdf6',
          '100': '#ddfbeb',
          '200': '#bdf5d7',
          '300': '#89ecba',
          '400': '#4eda94',
          '500': '#26c174',
          '600': '#1a9f5d',
          '700': '#187d4b',
          '800': '#196741',
          '900': '#165135',
          '950': '#062d1b',
        },
      }
    },
  },
  plugins: [],
}
