/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F7FF',
          100: '#CCEEFF',
          200: '#99DCFF',
          300: '#66CBFF',
          400: '#33B9FF',
          500: '#00A1E0',
          600: '#0081B3',
          700: '#006186',
          800: '#00405A',
          900: '#00202D'
        },
        secondary: {
          50: '#E6EEFF',
          100: '#CCDDFF',
          200: '#99BBFF',
          300: '#6699FF',
          400: '#3377FF',
          500: '#032E61',
          600: '#02254E',  
          700: '#021C3A',
          800: '#011327',
          900: '#010A14'
        },
        accent: {
          50: '#FFF4E6',
          100: '#FFE8CC',
          200: '#FFD199',
          300: '#FFBA66',
          400: '#FFA333',
          500: '#FF6900',
          600: '#CC5400',
          700: '#993F00',
          800: '#662A00',
          900: '#331500'
        },
        surface: '#FFFFFF',
        background: '#F8FAFB',
        success: '#04844B',
        warning: '#FFB75D',
        error: '#C4314B',
        info: '#16325C'
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 25px rgba(0, 0, 0, 0.1)',
        'hard': '0 16px 40px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(0, 161, 224, 0.3)',
      }
    },
  },
  plugins: [],
}