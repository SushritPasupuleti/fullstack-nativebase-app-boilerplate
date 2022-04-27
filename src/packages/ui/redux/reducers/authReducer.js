import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuth(state, action) {
            state.userData = action.payload;
        }
    },
})

///all actions
export const { setAuth } = authSlice.actions;

///all selectors
export const selectAuth = (state) => state.auth;

///reducer
export default authSlice.reducer;