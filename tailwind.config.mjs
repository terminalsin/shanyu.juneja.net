/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: 'none',
                        color: '#374151',
                        a: {
                            color: '#2563eb',
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        },
                        h1: {
                            color: '#111827',
                        },
                        h2: {
                            color: '#111827',
                        },
                        h3: {
                            color: '#111827',
                        },
                        h4: {
                            color: '#111827',
                        },
                        code: {
                            color: '#111827',
                            backgroundColor: '#f3f4f6',
                            paddingLeft: '0.25rem',
                            paddingRight: '0.25rem',
                            paddingTop: '0.125rem',
                            paddingBottom: '0.125rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.875em',
                            fontWeight: '400',
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },
                        pre: {
                            backgroundColor: '#f3f4f6',
                            color: '#374151',
                        },
                        'pre code': {
                            backgroundColor: 'transparent',
                            padding: '0',
                        },
                        blockquote: {
                            borderLeftColor: '#2563eb',
                            color: '#6b7280',
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
} 