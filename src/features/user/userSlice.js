import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authenticate, logInUser } from './userAPI';

const initialState = {
    investor: {}
};

export const asyncLogIn = createAsyncThunk(
    'user/logInUser',
    async data => {
        const resp = await logInUser(data);
        const json = await resp.json();
        sessionStorage.token = json.token;
        return json;
    }
);

export const asyncAuthenticate = createAsyncThunk(
    'user/authenticate',
    async () => {
        const resp = await authenticate();
        return resp.json();
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(asyncLogIn.fulfilled, (state, action) => {
                state.investor = action.payload.user.data.attributes
            })

            .addCase(asyncAuthenticate.fulfilled, (state, action) => {
                state.investor = action.payload.user.data.attributes
            })
    }
});

export const selectUser = state => state.user.investor;

export default userSlice.reducer