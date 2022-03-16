// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getTasks = createAsyncThunk('appFocus/getTasks', async params => {
  const response = await axios.get('/apps/focus/tasks', { params })

  return {
    params,
    data: response.data
  }
})

export const addTask = createAsyncThunk('appFocus/addTask', async (task, { dispatch, getState }) => {
  const response = await axios.post('/apps/focus/add-tasks', { task })
  await dispatch(getTasks(getState().focus.params))
  return response.data
})

export const updateTask = createAsyncThunk('appFocus/updateTask', async (task, { dispatch, getState }) => {
  const response = await axios.post('/apps/focus/update-task', { task })
  await dispatch(getTasks(getState().focus.params))
  return response.data
})

export const deleteTask = createAsyncThunk('appFocus/deleteTask', async (taskId, { dispatch, getState }) => {
  const response = await axios.delete('/apps/focus/delete-task', { taskId })
  await dispatch(getTasks(getState().focus.params))
  return response.data
})

export const appFocusSlice = createSlice({
  name: 'appFocus',
  initialState: {
    tasks: [],
    selectedTask: {},
    params: {
      filter: '',
      q: '',
      sort: '',
      tag: ''
    }
  },
  reducers: {
    reOrderTasks: (state, action) => {
      state.tasks = action.payload
    },
    selectTask: (state, action) => {
      state.selectedTask = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.tasks = action.payload.data
      state.params = action.payload.params
    })
  }
})

export const { reOrderTasks, selectTask } = appFocusSlice.actions

export default appFocusSlice.reducer
