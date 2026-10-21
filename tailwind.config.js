/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#050505',
          elevated: '#0f0f11',
          surface: '#151518',
          card: '#18181c'
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          DEFAULT: 'rgba(255, 255, 255, 0.14)',
          highlight: 'rgba(255, 255, 255, 0.28)'
        },
        text: {
          primary: '#F5F5F7',
          secondary: '#929298',
          muted: '#636369'
        },
        accent: {
          cyan: '#00F0FF',
          blue: '#38BDF8',
          silver: '#E5E7EB'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        'metallic-text': 'linear-gradient(180deg, #FFFFFF 0%, #D1D5DB 45%, #6B7280 100%)',
        'metallic-light': 'linear-gradient(180deg, #FFFFFF 0%, #E5E7EB 60%, #9CA3AF 100%)',
        'silver-glow': 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 70%)',
        'vignette': 'radial-gradient(ellipse at center, transparent 40%, #050505 100%)'
      },
      letterSpacing: {
        tighter: '-0.04em',
        widest: '0.2em'
      }
    },
  },
  plugins: [],
}
