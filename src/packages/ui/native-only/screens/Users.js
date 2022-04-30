import { Button, VStack, Center, Text } from 'native-base'
import React from 'react'
import { Link as SolitoLink } from 'solito/link'

export default function UserScreenNative() {
    return (
        <>
            <Center
                flex={1}
                _dark={{ bg: 'blueGray.900' }}
                _light={{ bg: 'blueGray.50' }}
            >
                <VStack>
                    <Text>Hello World (User)</Text>
                    <SolitoLink href="/" pointerEvents="none" variant="outline" colorScheme="coolGray">
                        <Button pointerEvents="none">
                            Go Home
                        </Button>
                    </SolitoLink>
                </VStack>
            </Center>
        </>
    )
}