import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const configEnv = require('../../../src/utility/config.json');

const initialState = {
  loading: false,
  isAuthenticated: false,
  userData: null,
  error: "",
};

//Feathing Data And Generating Actions
// Login Function
export const loginPost = createAsyncThunk(
  "userData/loginPost",
  async (userDetails) => {
    const { loginEmail, loginPassword } = userDetails;

    const config = {};
    const res = await axios.post(
      `${configEnv.BASE_URL2}/userApi/v1/login`,
      { email: loginEmail, password: loginPassword },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
        origin : true,
      }
    ).catch(err =>{
      toast.error(err.response.data.message)
    }) ;
    return res.data;
  }
);

//Register Function
export const registerPost = createAsyncThunk(
  "userData/registerPost",
  async (registerForm) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
      origin : true,
    };

    const { data } = await axios.post(
      `${configEnv.BASE_URL2}/userApi/v1/register`,
      registerForm,
      config
    ).catch(err=>{
      toast.error(err.response.data.message)
    });

    return data;
  }
);


//Logout Function
export const logout = createAsyncThunk("userData/logout", async () => {
  const { data } = await axios.get(`${configEnv.BASE_URL2}/userApi/v1/logout`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
    origin : true,
  });
  return data;
});

//Load User Function
export const loadUser = createAsyncThunk("userData/loaduser", async () => {
  const { data } = await axios.get(`${configEnv.BASE_URL2}/userApi/v1/me`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
    origin : true,
  }).catch(err =>{
    // toast.error(err.response.data.message)
  });
  return data;
});



const userSlice = createSlice({
  name: "userData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginPost.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.userData = null;
    });
    builder.addCase(loginPost.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.userData = action.payload;
      state.error = "";
      toast.success( `Welcome back, ${action.payload.user.name}`,{
        position: "bottom-center",
      })
    });
    builder.addCase(loginPost.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.userData = null;
      state.error = action.error.message;
      console.log(action.error)
    });
    builder.addCase(registerPost.pending, (state, action) => {
      state.loading = true;
      state.error = "";
      state.userData = null;
    });
    builder.addCase(registerPost.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.userData = action.payload;
      state.error = "";
    });
    builder.addCase(registerPost.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.userData = null;
      state.error = action.error.message;
    });
    builder.addCase(logout.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isAuthenticated = false;
      state.error = "";
      state.loading = false;
      state.userData = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(loadUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.error = "";
      state.loading = false;
      state.userData = action.payload;
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
