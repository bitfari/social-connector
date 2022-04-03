// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const fetchEvents = createAsyncThunk('appCalendar/fetchEvents', async calendars => {
  const response = await axios.get('/apps/book/events', { calendars })
  return response.data
})

export const addEvent = createAsyncThunk('appCalendar/addEvent', async (event, { dispatch, getState }) => {
  await axios.post('/apps/book/add-event', { event })
  await dispatch(fetchEvents(getState().calendar.selectedCalendars))
  return event
})

export const updateEvent = createAsyncThunk('appCalendar/updateEvent', async (event, { dispatch, getState }) => {
  await axios.post('/apps/book/update-event', { event })
  await dispatch(fetchEvents(getState().calendar.selectedCalendars))
  return event
})

export const removeEvent = createAsyncThunk('appCalendar/removeEvent', async id => {
  await axios.delete('/apps/book/remove-event', { id })
  return id
})

export const appCalendarSlice = createSlice({
  name: 'appCalendar',
  initialState: {
    events: [],
    selectedEvent: {},
    selectedCalendars: [
    'Billboards.btc', 'Times2.btc', 'Screens.btc', 'Agency.btc', 
    'Advertising.btc', 'Direct Mail.btc', 'Panorama.btc', 'Office.btc', 'Malls.btc',  'Say.btc', 'Stadium.btc',
    'Gyms.btc', 'Classifieds.btc', 'CPA.btc', 'Desktop.btc', 'Uncensored.btc', 'KidSafe.btc', 'HighSchool.btc' 
  ]

  },
  reducers: {
    selectEvent: (state, action) => {
      state.selectedEvent = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events = action.payload
      })
  }
})

export const { selectEvent } = appCalendarSlice.actions

export default appCalendarSlice.reducer
