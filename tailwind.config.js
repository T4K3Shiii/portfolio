/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        aclonica: ["Aclonica", "sans-serif"],
        abhaya: ["Abhaya Libre", "serif"],
        acme: ["Acme", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards 0.3s",
        "fade-in-delay-1": "fadeIn 1s ease-out forwards 0.5s",
        "fade-in-delay-2": "fadeIn 1s ease-out forwards 0.7s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
