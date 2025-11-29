module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '800px',
      lg: '1140px',
      'max-lg': {'max': '1140px'},
    },
    colors: {
    'text': 'var(--text)',
    'background': 'var(--background)',
    'primary': 'var(--primary)',
    'secondary': 'var(--secondary)',
     'accent': 'var(--accent)',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Martian Mono', 'monospace'],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}