'use client';

import { ReactNode, useState, useEffect } from 'react';
import { ThemeContext, Theme } from './ThemeContext';

export default function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Sichere Überprüfung für Client-Side-Code
    if (typeof window !== 'undefined') {
      // Prüfe beim Laden der Seite die bevorzugte Farbeinstellung des Nutzers
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }

      // Versuche, ein gespeichertes Theme aus dem localStorage zu laden
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);

  useEffect(() => {
    // Sichere Überprüfung für Client-Side-Code
    if (typeof window !== 'undefined') {
      // Aktualisiere das HTML-Element, wenn sich das Theme ändert
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Speichere das Theme im localStorage
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}