import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
const configEnv = require('../../../src/utility/config.json')


const initialState = {
    loading : false,
    campsiteDetails : null,
    error : ''
}

//Api Call for CampSite Details
export const fetchCampsiteDetails = createAsyncThunk('campsiteDetails/fetchCampsiteDetails', async (campSiteId)=>{
    const res = await axios.get(`${configEnv.BASE_URL2}/campApi/v1/campSites/${campSiteId}`)
    return res.data;
})



const campsiteDetailsSlice = createSlice({
    name : 'campsiteDetails',
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(fetchCampsiteDetails.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchCampsiteDetails.fulfilled, (state, action)=>{
            state.loading = false;
            state.campsiteDetails = action.payload;
            state.error = '';
        })
        builder.addCase(fetchCampsiteDetails.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default campsiteDetailsSlice.reducer