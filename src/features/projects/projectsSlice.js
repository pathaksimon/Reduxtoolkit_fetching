import {createSlice, createAsyncThunk, configureStore} from '@reduxjs/toolkit'
import axios from 'axios'

// Create an async thunk to fetch data
export const fetchProjectsData = createAsyncThunk(
  'projects/fetchProjects',
  empty => {
    console.log('0')
    console.log(empty)
    return axios
      .get(`https://apis.ccbp.in/ps/projects?category=${empty}`)
      .then(response => response.data)
  },
)

// Create a slice
const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProjectsData.pending, state => {
        console.log('1')
        return {
          ...state,
          loading: true,
        }
      })
      .addCase(fetchProjectsData.fulfilled, (state, action) => {
        console.log('2')
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        }
      })
      .addCase(fetchProjectsData.rejected, (state, action) => {
        console.log('3')
        return {
          ...state,
          data: [],
          loading: false,
          error: action.error.message,
        }
      })
  },
})

export default projectsSlice.reducer
