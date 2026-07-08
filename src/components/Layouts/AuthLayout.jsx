import { useContext } from 'react'
import Logo from '../Elements/Logo';
import { ThemeContext } from '../../context/themeContext';
import { DarkModeContext } from '../../context/darkModeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function AuthLayout(props) {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <main className={`min-h-screen bg-special-mainBg flex justify-center items-center ${theme.name} ${darkMode ? "dark" : ""}`}>
      <div className="w-full max-w-sm">
        <Logo />
        {children}

        <div className="flex justify-center mt-8">
          <button
            onClick={toggleDarkMode}
            data-testid="dark-mode-toggle"
            className="cursor-pointer text-black dark:text-white"
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </button>
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;