import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../utils/http';
import type { RootState } from '../store';

export type authType = {
    user: any;
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const intialState: authType = {
    user: {},
    status: 'idle',
};

export const userSignupThunk = createAsyncThunk('user/signup', async (userInfo: { firstName: string; lastName: string; password: string; email: string }, thunkAPI) => {
    try {
        const resposne = await http('/authv2/signup', 'POST', userInfo);
        return resposne;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
});

export const userSigninThunk = createAsyncThunk('user/signin', async (userInfo: { email: string; password: string }, thunkAPI) => {
    try {
        const response = await http('/authv2/login', 'POST', userInfo);
        return response;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
});

export const getUser = createAsyncThunk('user/getUser', async (data, thunkAPI) => {
    try {
        const response = await http('/user', 'GET');
        return response;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState: intialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userSignupThunk.pending, (state, action) => {
            state.status = 'pending';
        });
        builder.addCase(userSignupThunk.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
        });
        builder.addCase(userSignupThunk.rejected, (state, action) => {
            state.status = 'failed';
        });
        builder.addCase(userSigninThunk.pending, (state, payload) => {
            state.status = 'pending';
        });
        builder.addCase(userSigninThunk.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
        });
        builder.addCase(userSigninThunk.rejected, (state, action) => {
            state.status = 'failed';
        });
        builder.addCase(getUser.pending, (state, payload) => {
            state.status = 'pending';
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.status = 'failed';
        });
    },
});

export default authSlice.reducer;
