/* tailwind.config.js */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'space-black': '#0A0A0F',
                'deep-blue': '#0F172A',
                'neon-cyan': '#00F7FF',
                'galaxy-purple': '#8A2BE2',
                'stellar-gray': '#CBD5E1',
                'space-gray': '#1E293B'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            }
        }
    }
}