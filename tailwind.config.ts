import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        default: {
          primary: '#DB4444',
          'primary-50': '#DB4444', // Default shade of primary
        },
      },
    },
  },
  plugins: [],
};
export default config;
