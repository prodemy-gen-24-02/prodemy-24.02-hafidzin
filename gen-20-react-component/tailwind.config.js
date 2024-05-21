/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      color: {
        primary: '#faf7f2',
        secondary: '#f2ebe0',
        accent: '#fe7d35',
        dark: '#242424'
      }
    }
  },
};
export const plugins = [];