import React from 'react'
import { useRouter } from 'next/router'
import AppBar from "ui/components/AppBar";
import PostScreen from 'ui/native-only/screens/Post';

export default function Post() {
    const router = useRouter()
    const { id } = router.query

    console.log("ID: ", id);

    return (
        <>
            <AppBar />
            <PostScreen
            //pass props here that you get from the router
            />
        </>
    )
}
