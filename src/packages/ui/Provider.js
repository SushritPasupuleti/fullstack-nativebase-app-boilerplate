import { NativeBaseProvider } from 'native-base'
import React from 'react'

export function Provider({ children }) {
    return (
        <NativeBaseProvider
        // theme={theme} //pass theme here
        >
            {children}
        </NativeBaseProvider>
    )
}
