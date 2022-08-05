//  @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#101011",
      dark: "#2B2B2B",
      muted: "#EFEFEF",
      borderGrey:"#CCCCCC",
      grey:"#9CA3AF",
      yellow: "#F9CB40",
      success: "#03B839",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '.5':'0.5px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
    },
    extend: {
      spacing: {
        '15': '4rem',
      }
    },
  },
  plugins: [],
};
