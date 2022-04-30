import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPosts as getPostsFromAPI, getPost as getPostFromAPI } from '../../../services/posts';
const initialState = {
    posts: null,
    post: null,
    loading: false,
    error: null,
};

export const getPosts = createAsyncThunk(
    'post/getPosts',
    async(payload, thunkAPI) => {
        console.log("getPosts thunk");
        return getPostsFromAPI();
    }
)

export const getPost = createAsyncThunk(
    'post/getPost',
    async(payload, thunkAPI) => {
        console.log("getPost thunk");
        return getPostFromAPI(payload);
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            //set posts to state
            state.posts = action.payload;
        }),
        builder.addCase(getPost.fulfilled, (state, action) => {
            //set post to state
            state.post = action.payload;
        })
    }
})

export const {  } = postsSlice.actions;

///all selectors
export const selectPosts = (state) => state.posts;

///reducer
export default postsSlice.reducer;