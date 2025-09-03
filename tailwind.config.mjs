/***** Tailwind Config *****/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#ffffff',
        ink: '#0a0a0a',
        subtle: '#f5f5f7',
        accent: '#0071e3' // Apple-ish blue
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
};
