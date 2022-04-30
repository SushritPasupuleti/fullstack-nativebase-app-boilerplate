import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null,
    loading: false,
    error: null,
};

//thunks
export const getAuth = createAsyncThunk(
    'auth/getAuth',
    async(payload, thunkAPI) => {
        //normally this would be pointed to your
        //authentication logic which would return some userdata
        //checkout firebase, or expo auth examples.
        console.log("getAuth thunk");
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json();
        return data.results[0];
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuth(state, action) {
            state.userData = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(getAuth.fulfilled, (state, action) => {
            //set user data to state
            console.log("getAuth fulfilled");
            state.userData = action.payload;
        });
    }
})

///all actions
export const { setAuth } = authSlice.actions;

///all selectors
export const selectAuth = (state) => state.auth;

///reducer
export default authSlice.reducer;