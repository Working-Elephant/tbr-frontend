//  @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#101011",
      dark: "#2B2B2B",
      textMuted: "#212B36",
      inputBgGrey: "#FEFCFC",
      borderGrey: "#ECECEC",
      lightGrey: "#E8E8E8",
      grey: "#9CA3AF",
      yellow: "#F9CB40",
      success: "#03B839",
      blue: "#3B54F5",
      white: "#FFFFFF",
      error: "#FF0000"
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      xxs: ".6rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      ".5": "0.5px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
    },
    extend: {
      spacing: {
        15: "4rem",
        3.5: "0.875rem",
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/images/header1.jpeg')",
      },
    },
  },
  plugins: [],
};
