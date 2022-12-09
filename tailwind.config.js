/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  safelist: [
    "bg-red-800",
    "bg-green-800",
    "bg-blue-800",
    "bg-amber-800",
    "bg-yellow-800",
    "bg-indigo-800",
    "bg-purple-800",
    "bg-orange-800",
    "bg-pink-800",
    "bg-gray-800",
    "bg-cyan-800",
    "bg-slate-800"
  ],
  plugins: []
};
