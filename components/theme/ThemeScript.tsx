export function ThemeScript() {
  const themeScript = `
    (function() {
      const storageKey = 'portfolio-theme';
      const getTheme = () => {
        try {
          const theme = localStorage.getItem(storageKey);
          if (theme === 'light' || theme === 'dark') {
            return theme;
          }
          if (theme === 'system') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
          if (!theme) {
            return 'dark';
          }
        } catch (e) {}
        return 'dark'; // Fallback
      };

      const theme = getTheme();
      const root = document.documentElement;

      root.classList.remove('light', 'dark');
      root.classList.add(theme);
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  )
}
