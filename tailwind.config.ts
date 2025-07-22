import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                serif: ['var(--font-arvo)', 'serif'],
            },
            colors: {
                'navy': '#08204F',
                'light-navy': '#112240',
                'lightest-navy': '#233554',
                'slate': '#8892b0',
                'light-slate': '#a8b2d1',
                'lightest-slate': '#ccd6f6',
                'white': '#e6f1ff',
                'cyan': '#64ffda',
                'cyan-light': '#B3EEFF',
                'dark-cyan': '#0B80A1',
            },
        },
    },
    plugins: [],
};
export default config;
