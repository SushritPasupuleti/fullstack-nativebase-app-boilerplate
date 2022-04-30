import { Button, VStack, Center, Text } from 'native-base'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link as SolitoLink } from 'solito/link'
import { selectAuth } from '../../redux/reducers/authReducer'

export default function UserScreenNative() {
    const auth = useSelector(selectAuth);

    return (
        <>
            <Center
                flex={1}
                _dark={{ bg: 'blueGray.900' }}
                _light={{ bg: 'blueGray.50' }}
            >
                <VStack space={4}>
                    <Text>Hello {`${auth.userData.name.first} ${auth.userData.name.last}`}</Text>
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
