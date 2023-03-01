import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit")




const initialState = {
    loading : false,
    isUpdated : false,
    error : null,
}

const updateUserSlice = createSlice({
    name : 'updateUser',
    initialState,
    reducers : {
        updateUserRequest : (state, action)=>{
            state.loading = true;
        },
        updateUserSuccess : (state, action)=>{
            state.loading = false;
            state.isUpdated = true;
            toast.success('Details Updated Successfully')
        },
        updateUserFail : (state, action)=>{
            state.loading = false;
            state.isUpdated = false;
            state.error = action.payload;
            toast.error(`Failed To Update : ${action.payload}`)
        },
        updateReset : (state, action)=>{
            state.loading = false;
            state.isUpdated = false;
            state.error = null;
        },
        updateUserClearError : (state, action)=>{
            state.error = null;
        }
    }
})

export const {updateUserRequest, updateUserSuccess, updateUserFail, updateUserClearError, updateReset } = updateUserSlice.actions

export default updateUserSlice.reducer;