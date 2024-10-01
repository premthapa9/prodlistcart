/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mRed: "hsl(14, 86%, 42%)",
        mGreen: "hsl(159, 69%, 38%)",
        mRose50: "hsl(20, 50%, 98%)",
        mRose100: "hsl(13, 31%, 94%)",
        mRose300: "hsl(14, 25%, 72%)",
        mRose400: "hsl(7, 20%, 60%)",
        mRose500: "hsl(12, 20%, 44%)",
        mRose900: "hsl(14, 65%, 9%)",
      },
    },
  },
  plugins: [],
};
