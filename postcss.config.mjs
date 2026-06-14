// Tailwind CSS v4 is configured CSS-first (see app/globals.css @theme).
// The PostCSS plugin is the only build wiring it needs.
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
