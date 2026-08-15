import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ocean: '#003B70', ink: '#002B50', electric: '#00AEEF', coral: '#ED1C24' }, fontFamily: { display: ['var(--font-display)'] }, boxShadow: { glow: '0 0 45px rgba(0,174,239,.22)' } } }, plugins: [] };
export default config;
