import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const configEnv = require('../../../src/utility/config.json')



const initialState = {
    loading : false,
    campsiteData : [],
    error : '',
}


//Generating Pending, fullfilled and rejected action types
export const fetchCampSiteData = createAsyncThunk('campsiteData/fetchCampsiteData', async ()=>{
    const res = await axios
        .get(`${configEnv.BASE_URL2}/campApi/v1/campSites`);
    return res.data;
})


const campsiteSlice = createSlice({
    name : 'campsiteData',
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(fetchCampSiteData.pending, (state)=>{
            state.loading = true
            state.error = '';
        })
        builder.addCase(fetchCampSiteData.fulfilled, (state, action)=>{
            state.loading = false;
            state.campsiteData = action.payload;
            state.error = '';
        })
        builder.addCase(fetchCampSiteData.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default campsiteSlice.reducer

