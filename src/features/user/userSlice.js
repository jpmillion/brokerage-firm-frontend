import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authenticate, logInUser } from './userAPI';

const initialState = {
    investor: {},
    logInStatus: false
};

export const asyncLogIn = createAsyncThunk(
    'user/logInUser',
    async data => {
        const resp = await logInUser(data);
        const json = await resp.json();
        if (!!json.token) sessionStorage.token = json.token;
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
    reducers: {
        logOut: state => {
            state.logInStatus = false;
            state.investor = {}
        }
    },
    extraReducers: builder => {
        builder
            .addCase(asyncLogIn.fulfilled, (state, action) => {
                state.logInStatus = true;
                state.investor = action.payload.user.data.attributes
            })

            .addCase(asyncAuthenticate.fulfilled, (state, action) => {
                state.logInStatus = true;
                state.investor = action.payload.user.data.attributes
            })
    }
});

export const { logOut } = userSlice.actions;

export const selectUser = state => state.user.investor;
export const selectLogInStatus = state => state.user.logInStatus;

export default userSlice.reducer