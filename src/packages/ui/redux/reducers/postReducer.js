import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPosts as getPostsFromAPI } from '../../../services/posts';
const initialState = {
    posts: null,
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

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            //set posts to state
            state.posts = action.payload;
        })
    }
})

export const {  } = postsSlice.actions;

///all selectors
export const selectPosts = (state) => state.posts;

///reducer
export default postsSlice.reducer;