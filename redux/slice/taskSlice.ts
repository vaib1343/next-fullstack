import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../utils/http';

type Task = {
    id: string;
    title: string;
    description: string;
    userId: string;
    Status: string;
    priority: string;
    createdAt: string;
    updatedAt: string;
};

type initialStateType = {
    taskCreated: boolean;
    taskDeleted: boolean;
    tasks: Array<Task>;
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    task: Task;
};

type addTaskPayload = {
    title: string;
    descriptiion: string;
    priority: string;
};

export const addTask = createAsyncThunk('task/create', async (data: addTaskPayload, thunkAPI) => {
    try {
        const response = await http('/task', 'POST', data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const getTasks = createAsyncThunk('task/get', async (data, thunkAPI) => {
    try {
        const response = await http('/task', 'GET');
        console.log(response);
        return response.tasks ? response.tasks : [];
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const initialState: initialStateType = {
    taskCreated: false,
    taskDeleted: false,
    tasks: [],
    status: 'idle',
    task: {} as Task,
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addTask.pending, (state, actions) => {
            state.status = 'pending';
        });
        builder.addCase(addTask.fulfilled, (state, actions) => {
            state.status = 'fulfilled';
            state.taskCreated = true;
        });
        builder.addCase(addTask.rejected, (state, actions) => {
            state.status = 'rejected';
        });
        builder.addCase(getTasks.pending, (state, actions) => {
            state.status = 'pending';
        });
        builder.addCase(getTasks.fulfilled, (state, actions) => {
            state.status = 'fulfilled';
            state.tasks = actions.payload;
        });
        builder.addCase(getTasks.rejected, (state, actions) => {
            state.status = 'rejected';
        });
    },
});

export default taskSlice.reducer;
