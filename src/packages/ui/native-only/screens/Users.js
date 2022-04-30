import { Button, VStack, Center, Text } from 'native-base'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link as SolitoLink } from 'solito/link'
import { getAuth, selectAuth } from "../../redux/reducers/authReducer";
import {MaterialIcons} from '@expo/vector-icons';

export default function UserScreenNative() {
    const auth = useSelector(selectAuth);
    const dispatch = useDispatch();

    const signIn = () => {
        console.log("signing in...");
        dispatch(getAuth());
    }

    
    if (auth.userData) {
        return (
            <>
            <Center
                flex={1}
                _dark={{ bg: 'blueGray.900' }}
                _light={{ bg: 'blueGray.50' }}
            >
                <VStack space={4}>
                    {

                    }
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

    return (
        <>
            <Center
                flex={1}
                _dark={{ bg: 'blueGray.900' }}
                _light={{ bg: 'blueGray.50' }}
            >
                <VStack space={4}>
                    {

                    }
                    <Text>Hello there, you are not signed in...</Text>
                    <Button borderRadius="8" padding={2} marginBottom={1}
                        rightIcon={
                            <MaterialIcons name="navigate-next" size="md" color="white" />
                        }
                        onPress={() => signIn()}
                    >
                        Sign in
                    </Button>
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
