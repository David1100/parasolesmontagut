/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        slider: "linear-gradient(to top,#000 10%, transparent)",
        
      },
      colors: {
        primary: '#D30000',
        primary_login: '#64748b6e'
      },
      keyframes: {
        showContent: {
          '0%': {
            transform: 'translateY(20px)',
            filter: 'blur(10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            filter: 'blur(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'show-content': 'showContent 0.5s 0.7s ease-in-out 1 forwards',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
