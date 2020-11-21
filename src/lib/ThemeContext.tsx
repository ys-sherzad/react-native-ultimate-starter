import React from 'react';
import { themes } from '../utils/theme';

// import { Appearance } from 'react-native-appearance'
// const systemTheme = Appearance.getColorScheme();

// console.log('systemTheme >>>>> ', systemTheme);

const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => { }
});

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export const useTheme = () => React.useContext(ThemeContext);

export default ThemeContext;