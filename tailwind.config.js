/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // 필요에 따라 추가 경로를 여기에 포함시킬 수 있습니다.
    // 예: "./public/**/*.html",
    // "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // or 'media' for automatic dark mode based on user's system preferences
  theme: {
    extend: {
      colors: {
        GRAY_LIGHT: '#f1f3f5',
        GRAY: '#adb5bd',
        GRAY_HEAVY: '#868e96',
        GRAY_EXTRAHEAVY: '#495057',
        BLACK: '#212529',
        PRIMARY_LIGHT: '#c3fae8',
        PRIMARY: '#12b886',
        PRIMARY_HEAVY: '#087f5b',
        GRADIENT_FROM: '#51cf66',
        GRADIENT_TO: '#0c8599',
      },
    },
  },
  plugins: [],
};
