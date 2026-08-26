/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#DF1A22',
          'red-dark': '#B8151B',
          yellow: '#F2A900',
          green: '#00853F',
          'green-dark': '#006B33',
        },
        ink: '#111111',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'glow-yellow': 'radial-gradient(circle at center, rgba(242,169,0,0.35) 0%, rgba(242,169,0,0) 70%)',
        'glow-red': 'radial-gradient(circle at center, rgba(223,26,34,0.25) 0%, rgba(223,26,34,0) 70%)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        /* --- ANIMASI NGAMBANG ATAS-BAWAH MURNI --- */
        'float-y': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-24px)' },
        },
        'float-y-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(24px)' },
        },
        'scan-wave': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translateX(200%)', opacity: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        /* --- DUA VARIASI KECEPATAN & ARAH --- */
        'float-y': 'float-y 7s ease-in-out infinite',
        'float-y-reverse': 'float-y-reverse 9s ease-in-out infinite',
        'scan-wave': 'scan-wave 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}