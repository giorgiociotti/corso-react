import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.css'; // Importa il foglio di stile

function ThemeSwitcher() {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        // Controlla se l'utente ha già impostato un tema nel localStorage
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        // Applica il tema al body
        document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
        // Salva la preferenza nel localStorage
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);

    return (
        <label className="theme-switcher">
            <input
                type="checkbox"
                checked={isDarkTheme}
                onChange={() => setIsDarkTheme(prev => !prev)}
            />
            <span className="slider"></span>
            <span>{isDarkTheme ? '🌙' : '☀️'}</span> {/* Icona del tema */}
        </label>
    );
}

export default ThemeSwitcher;
/*slider v2 da testare**/
/*import { useState } from 'react';

function ThemeSwitcher() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
    document.body.classList.toggle('dark-theme', !isDarkTheme);
  };

  return (
    <button onClick={toggleTheme}>
      Cambia Tema
    </button>
  );
}

export default ThemeSwitcher;*/ 