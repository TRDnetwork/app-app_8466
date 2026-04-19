module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F5F5DC',
        surface: '#E8DCC5',
        text: '#2F4F2F',
        'text-dim': '#6F4E37',
        accent: '#8B4513',
        'accent-alt': '#6F4E37',
        border: '#C1B39E',
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#D32F2F',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}