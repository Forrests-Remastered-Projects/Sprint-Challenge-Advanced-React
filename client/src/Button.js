import React, { useState } from 'react';
import useDarkMode from './darkMode';
const Button = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="button">
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Button;
