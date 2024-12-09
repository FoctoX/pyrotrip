import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // State untuk dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efek untuk sinkronisasi dark mode dengan localStorage dan class HTML
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Fungsi toggle dark mode
  const toggleDarkMode = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className='w-full bg-white dark:bg-zinc-950 dark:shadow-gray-500 p-3 shadow-sm flex justify-between items-center px-5 sticky top-0 z-50'>
      <Link className='flex items-center' to={'/'}>
        <img className='w-10 h-10' src='/logo.svg' alt='Logo' />
        <p className='font-extrabold text-xl text-black dark:text-white'>PyroTrip</p>
      </Link>
      <button
        onClick={toggleDarkMode}
        className='h-10 w-10 p-2 rounded-full bg-gray-200 dark:bg-gray-600'>
        <img className='fill-white' alt='toggle-dark-mode' src='/mode.svg'/>
      </button>
    </div>
  );
}

export default Header;
