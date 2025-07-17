module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,vue,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#295058",
        secondary: "#CDF4A4",
        background: "#F6F3EE",
        complementary: {
          DEFAULT: "#5E5E65",
          70: "#5E5E65B3", // 70% opacity in hex
        },
      },
      fontFamily: {
        sans: ['baloo-2', 'sans-serif'], // Set baloo-2 as the default sans fon
        tiro: ['tiro-devanagari-hindi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 