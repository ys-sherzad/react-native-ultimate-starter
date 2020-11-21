import React from 'react';
import { themes } from '../utils/theme';

const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => { }
});

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export const useTheme = () => React.useContext(ThemeContext);

export default ThemeContext;