import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type authType = {};

const intialState: authType = {};

export const authSlice = createSlice({
    name: 'auth',
    initialState: intialState,
    reducers: {},
});
