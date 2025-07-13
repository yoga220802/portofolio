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
                // Font default untuk teks biasa (paragraf, dll)
                sans: ['Inter', 'sans-serif'],
                // Font 'Arvo' untuk judul atau elemen khusus, bisa dipanggil dengan class 'font-serif'
                serif: ['Arvo', 'serif'],
            },
            colors: {
                // Menambahkan warna dari desain agar konsisten
                'navy': '#0A192F',
                'light-navy': '#112240',
                'lightest-navy': '#233554',
                'slate': '#8892b0',
                'light-slate': '#a8b2d1',
                'lightest-slate': '#ccd6f6',
                'white': '#e6f1ff',
                'cyan': '#64ffda', // Warna aksen utama
            },
        },
    },
    plugins: [],
};
export default config;
