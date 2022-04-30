import { Button, VStack, Center, Text, ScrollView, Stack, Heading } from 'native-base'
import React, { useEffect } from 'react'
import { Link as SolitoLink } from 'solito/link'
import { useDispatch, useSelector } from 'react-redux'
import { getPost, selectPosts } from '../../redux/reducers/postReducer'
import Post from '../../components/PostItem'
import { createParam } from 'solito'

const { useParam } = createParam()

export default function PostScreen(props) {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    const [id] = useParam('id')

    useEffect(() => {
        if (!posts.post) {
            dispatch(getPost(id));
        }
    }, [posts, id])

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
                            Enjoy your read
                        </Text>
                    </Stack>
                    {
                        posts.post ? (
                            <Post
                                id={posts.post.id}
                                title={posts.post.title}
                                body={posts.post.body}
                                userId={posts.post.userId}
                            />
                        ) : (
                            <Text>Post does not exist</Text>
                        )
                    }
                </VStack>
            </Center>
        </ScrollView>
        // </>
    )
}
