'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Überprüfen, ob wir auf der Startseite sind
  const isHomePage = pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Funktion zum Überprüfen, ob ein Link aktiv ist
  const isActive = (path: string) => {
    if (path === '/kurse' && pathname.startsWith('/kurse')) {
      return true;
    }
    return pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 glass' : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href={isHomePage ? "/" : "/kurse"} className="flex items-center space-x-2">
            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
              Informationssicherheit
            </span>
          </Link>
          
          {/* Nur auf Nicht-Startseiten die vollständige Navigation anzeigen */}
          {!isHomePage && (
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/kurse"
                className={`transition-all ${
                  isActive('/kurse')
                    ? 'text-primary-600 dark:text-primary-400 font-semibold'
                    : 'hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                Kurse
                {isActive('/kurse') && (
                  <div className="h-0.5 bg-primary-600 dark:bg-primary-400 w-full mt-0.5 rounded-full"></div>
                )}
              </Link>
              <Link
                href="/umfragen"
                className={`transition-all ${
                  isActive('/umfragen')
                    ? 'text-primary-600 dark:text-primary-400 font-semibold'
                    : 'hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                Umfragen
                {isActive('/umfragen') && (
                  <div className="h-0.5 bg-primary-600 dark:bg-primary-400 w-full mt-0.5 rounded-full"></div>
                )}
              </Link>
              <Link
                href="/fortschritt"
                className={`transition-all ${
                  isActive('/fortschritt')
                    ? 'text-primary-600 dark:text-primary-400 font-semibold'
                    : 'hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                Fortschritt
                {isActive('/fortschritt') && (
                  <div className="h-0.5 bg-primary-600 dark:bg-primary-400 w-full mt-0.5 rounded-full"></div>
                )}
              </Link>
            </div>
          )}
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label={theme === 'dark' ? 'In den Light Mode wechseln' : 'In den Dark Mode wechseln'}
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            {/* Burger-Menü für Mobile, nur auf Nicht-Startseiten */}
            {!isHomePage && (
              <div className="md:hidden">
                <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            )}
            
            {/* Anmelden-Button */}
            <Link 
              href="/anmelden" 
              className="hidden md:block px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-all"
            >
              Anmelden
            </Link>
            
            {/* Login-Button */}
            <Link 
              href="/login" 
              className="hidden md:block px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}