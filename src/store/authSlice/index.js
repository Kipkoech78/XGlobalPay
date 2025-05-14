import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading : false,
    isAuthenticated: false,
    user:null,
}


const AuthReducer = createSlice({
    name:'auth',
    initialState,
    reducers:{
    },
    extraReducers: (builder)=>{
        builder
    }

})

export default AuthReducer.reducer;