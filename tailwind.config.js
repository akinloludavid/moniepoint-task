/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xl:'120px',
        lg:'90px',
        base:'16px',
        body:'14px',
        small:'12px'
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      colors:{
        primary:'#FF592A',
        light:'#E8F2FC',
        white:'#ffffff',
        black:'#000000'
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '15': '60px',

        '16': '64px',
        '18': '72px',
        '20': '84px',
        '24': '96px',
        '32': '128px',
      },
    },
  },
  plugins: [],
}

