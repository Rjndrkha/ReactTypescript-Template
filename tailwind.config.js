/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "--white": "#F9FCFD",
        "--black": "#020506",

        "--primary-10": "#D3ECF2",
        "--primary-20": "#A6D8E4",
        "--primary-30": "#7AC5D7",
        "--primary-40": "#4DB1C9",
        "--primary-50": "#219EBC",

        "--secondary-10": "#F2D9D3",
        "--secondary-20": "#E4B2A6",
        "--secondary-30": "#D78C7A",
        "--secondary-40": "#C9654D",
        "--secondary-50": "#BC3F21",

        "--error": "#FF2E2E",
        "--caution": "#F4B63C",
        "--success": "#2A9928",

        "--error-bg": "#FFE5E5",
        "--caution-bg": "#E5F3E5",
        "--success-bg": "#FEF6E7",

        "--gray-10": "#F5F7F8",
        "--gray-20": "#EDEFF0",
        "--gray-30": "#DDE0E1",
        "--gray-40": "#BEC1C3",
        "--gray-50": "#7F8386",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
