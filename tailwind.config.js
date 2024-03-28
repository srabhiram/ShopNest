/** @type {import('tailwindcss').Config} */
export default{
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", // ...
  "node_modules/flowbite-react/lib/esm/**/*.js",],
  theme: {
    extend: {colors: {
        frgray: "#6993bb",
        togray: "#7399c0",
      },},
  },
  plugins: [ require("flowbite/plugin"),],
};
