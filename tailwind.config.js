/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f2a4a',
          blue: '#1a3f6f',
          'blue-warm': '#2563a8',
          sky: '#5b9bd5',
          'blue-soft': '#a8cceb',
          'blue-whisper': '#e8f1fa',
          forest: '#1a5632',
          leaf: '#2d7a4f',
          sage: '#7fb069',
          mint: '#b5d4a7',
          'green-whisper': '#eaf4e5',
          cream: '#faf7f2',
          'cream-deep': '#f0ebe2',
          coral: '#e07455',
          'coral-soft': '#f0a68e',
          'coral-whisper': '#fce8e0',
        },
        warm: {
          dark: '#2d2926',
          gray: '#6b6560',
          light: '#9c958e',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        label: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-slower': 'float 14s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'morph-slow': 'morph 12s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'spin-slower': 'spin 40s linear infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'draw-line': 'draw-line 2s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-20px) rotate(-1deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 40% 60% 30%/40% 50% 60% 50%' },
          '75%': { borderRadius: '40% 60% 30% 70%/60% 40% 50% 30%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'draw-line': {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
