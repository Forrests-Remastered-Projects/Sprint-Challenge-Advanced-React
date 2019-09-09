import { useEffect } from 'react';
import useLocalStorage from './localStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode');
    useEffect(() => {
    if (darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}, [darkMode]);
    return [darkMode, setDarkMode];
};

export default useDarkMode;

