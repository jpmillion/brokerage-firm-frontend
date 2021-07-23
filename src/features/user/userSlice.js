import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logInUser } from './userAPI';

const initialState = {
    investor: {}
};

export const asyncLogIn = createAsyncThunk(
    'user/logInUser',
    async (data) => {
        const resp = await logInUser(data);
        return resp.json();
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(asyncLogIn.fulfilled, (state, action) => {
                state.investor = action.payload.user.data.attributes
            })
    }
});

export const selectUser = state => state.user.investor;

export default userSlice.reducer