import { extendTheme } from 'native-base';

export const darkTheme = extendTheme({
    config: {
        // Changing initialColorMode to 'dark'
        initialColorMode: 'dark',
    },
})

export const lightTheme = extendTheme({
    config: {
        initialColorMode: 'light',//default anyway
    }
})