import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../utils/http';

export const addTask = createAsyncThunk('task/create', async (data, thunkAPI) => {
    try {
        const response = await http('/task', 'POST', data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const initialState = {
    taskCreated: false,
    taskDeleted: false,
    tasks: [],
    status: 'idle',
    task: {},
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addTask.pending, (state, actions)=>{})
    },
});
