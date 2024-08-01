const themes = {
  light: {
    '--bg': '#fff',
    '--color': '#000',
    '--item-bg': '#bfdbfe',
    '--btn': '#d1d5db',
    '--btn-hover': '#d1d5db',
    '--item-hover': '#7fb6fa',
    '--item-bg-correct': '#f1cd57',
    '--item-bg-incorrect': '#fd796f',
  },
  dark: {
    '--bg': '#353434',
    '--color': '#f3efef',
    '--item-bg': '#4da986',
    '--btn': '#4280dd',
    '--btn-hover': '#246fdf',
    '--item-hover': '#2e966e',
    '--item-bg-correct': '#f1cd57',
    '--item-bg-incorrect': '#fd796f',
  },
};

export function onThemeSelectHandler(theme) {
  onSetTheme(theme);
}

function onSetTheme(name) {
  const getNameThemeFromObjectWithThems = themes[name];
  Object.entries(getNameThemeFromObjectWithThems).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}
