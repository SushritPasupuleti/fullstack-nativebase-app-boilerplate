import { ScrollView } from 'native-base';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, selectPosts } from '../redux/reducers/postReducer'
import Post from './PostItem';

function PostList() {

    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!posts.posts) {
            dispatch(getPosts());
        }
    }, [posts])

    return (
        <>
            {/* <ScrollView> */}
            {
                posts.posts && posts.posts.map(post => (
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        userId={post.userId}
                    />
                ))
            }
            {/* </ScrollView> */}
        </>
    )
}

export default PostList