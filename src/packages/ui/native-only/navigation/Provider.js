import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export function NavigationProvider({ children }) {
    return (
        <NavigationContainer
            linking={useMemo(
                () => ({
                    prefixes: [Linking.createURL('/')],
                    config: {
                        initialRouteName: 'user',
                        screens: {
                            home: '',
                            user: 'user/:id',
                            posts: 'posts/:id',
                        },
                    },
                }),
                []
            )}
        >
            {children}
        </NavigationContainer>
    )
}