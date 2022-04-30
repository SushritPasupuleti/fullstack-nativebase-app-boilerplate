import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { darkTheme } from './theme'

export function Provider({ children }) {
    return (
        <NativeBaseProvider
            theme={darkTheme} //pass theme here
        >
            {children}
        </NativeBaseProvider>
    )
}
