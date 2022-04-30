import { Button, VStack, Center, Text, ScrollView, Stack, Heading } from 'native-base'
import React from 'react'
import { Link as SolitoLink } from 'solito/link'
import PostList from '../../components/PostList'

export default function HomeScreen() {

    return (
        // <>
        <ScrollView
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'blueGray.50' }}
        >
            <Center
                flex={1}
                _dark={{ bg: 'blueGray.900' }}
                _light={{ bg: 'blueGray.50' }}
            >
                <VStack>
                    <Stack space={2} mt={10} mb={5}>
                        <Heading size="md" ml="-1">
                            Hello there
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: "violet.500"
                        }} _dark={{
                            color: "violet.400"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            Check out some of our awesome posts
                        </Text>
                    </Stack>
                    <PostList />
                </VStack>
            </Center>
        </ScrollView>
        // </>
    )
}
