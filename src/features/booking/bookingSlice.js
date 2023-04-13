import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const configEnv = require('../../../src/utility/config.json')



const initialState = {
    loading : false,
    allBookings : [],
    error : '',
}


//Generating Pending, fullfilled and rejected action types
export const fetchAllBookingData = createAsyncThunk('bookingData/fetchAllBookingData', async ()=>{
    const res = await axios
        .get(`${configEnv.BASE_URL2}/bookingApi/v1/admin/bookings`,
        {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
            withCredentials: true,
          }
        )
    return res.data;
})


const bookingSlice = createSlice({
    name : 'bookingData',
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(fetchAllBookingData.pending, (state)=>{
            state.loading = true
            state.error = '';
        })
        builder.addCase(fetchAllBookingData.fulfilled, (state, action)=>{
            state.loading = false;
            state.allBookings = action.payload;
            state.error = '';
        })
        builder.addCase(fetchAllBookingData.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default bookingSlice.reducer

