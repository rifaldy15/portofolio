import type { Config } from 'tailwindcss';

export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        'glowing-border': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.4)' },
          '25%': { boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)' },
          '50%': { boxShadow: '0 0 15px rgba(236, 72, 153, 0.4)' },
          '75%': { boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)' },
        },
        'text-glowing-effect': {
          '0%, 100%': { 'text-shadow': '0 0 5px rgba(59, 130, 246, 0.8), 0 0 15px rgba(59, 130, 246, 0.6)' },
          '33%': { 'text-shadow': '0 0 5px rgba(139, 92, 246, 0.8), 0 0 15px rgba(139, 92, 246, 0.6)' },
          '66%': { 'text-shadow': '0 0 5px rgba(236, 72, 153, 0.8), 0 0 15px rgba(236, 72, 153, 0.6)' },
        },
      },
      animation: {
        'glowing-border': 'glowing-border 4s infinite alternate ease-in-out',
        'text-glowing': 'text-glowing-effect 6s infinite alternate ease-in-out',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;
