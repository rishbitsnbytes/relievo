import { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const appThemeContext = createContext({ toggleTheme: () => { }, mode: 'dark' });

const AppThemeProvider = ({ children }) => {

    const [mode, setMode] = useState('dark');

    const toggleMode = useMemo(() => ({
        toggleTheme: () => {
            setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
        },
        mode
    }), [mode]);

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            ...(mode === 'light' ?
                {
                    // palette values for light mode
                    primary: {
                        light: '#f5f5f5',
                        main: '#ffffff',
                        dark: '#dee2e5'
                    },
                    secondary: {
                        main: '#6261bd'
                    },
                    otherColors: {
                        white: '#ffffff',
                        black: '#000000',
                        action: '#EF4F4F'
                    },
                    typography: {
                        fontFamily: 'Gruppo',
                    },
                } :
                {
                    // palette values for dark mode
                    primary: {
                        light: '#121212',
                        main: '#212121',
                        dark: '#ffffff'
                    },
                    secondary: {
                        main: '#6261bd'
                    },
                    otherColors: {
                        white: '#ffffff',
                        black: '#000000',
                        action: '#EF4F4F',
                        gray: '#d4d4d4'
                    },
                    typography: {
                        fontFamily: 'Gruppo',
                    },
                }),
        },
    }), [mode]);

    return <appThemeContext.Provider value={toggleMode}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </appThemeContext.Provider>
}

const useAppTheme = () => useContext(appThemeContext);

export { useAppTheme, AppThemeProvider };