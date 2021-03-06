import { AspectRatio, Box, Center, Heading, HStack, Image, Stack, Text, VStack } from 'native-base'
import React from 'react'
import { Link as SolitoLink } from 'solito/link'

export default function Post(props) {
    return (
        <>
            <Box alignItems="center" mb={5}>
                <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Stack p="4" space={3}>
                        <SolitoLink href={`/posts/${props.id}`} pointerEvents="none" variant="outline" colorScheme="coolGray">
                            <Stack space={2}>
                                <Heading size="md" ml="-1">
                                    {props.title}
                                </Heading>
                            </Stack>
                        </SolitoLink>
                        <Text fontWeight="400">
                            {props.body}
                        </Text>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

