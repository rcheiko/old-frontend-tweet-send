/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "Poppins",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
      ],
    },
    fontSize: {
      title1: ['30px', {
        lineHeight: '45px',
        fontWeight: '400'
      }],
      title2: ['22px', {
        lineHeight: '33px',
        fontWeight: '600'
      }],
      title3: ['18px', {
        lineHeight: '27px',
        fontWeight: '600'
      }],
      subTitle: ['12px', '18px'],
      p: ['14px', '20px'],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      orange: "#FA6400",
      blue: "#6A93FB",
      primaryButton1: "#3E54FA",
      primaryButton2: "#75A2FC",
      grey: "#8C8A9A",
      errorSoft: "#E43B7",
      errorText: "#E6344A",
      error: "#FF0000",
      good: "#00CE99",
      warning: "#F5BA03",
    },
  },
  plugins: [],
};
