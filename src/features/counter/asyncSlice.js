import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Initial state
const initialState={
    isLoading:false,
    posts:[],
    error:''
}
// create the thunk
export const getPosts = createAsyncThunk('post/getPosts', ()=>{
    try {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response)=>response.data)
    } catch (error) {
        console.log(error);
    }
    
})

const postSlice= createSlice({
    name:'post',
    initialState,
    reducers:{
        empty_posts: (state) => {
             state.posts= []
       }
    },
    extraReducers:((builder)=>{
        builder.addCase(getPosts.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(getPosts.fulfilled,(state, action)=>{
            state.isLoading = false,
            state.posts = action.payload
        })
        builder.addCase(getPosts.rejected,(state, action)=>{
            state.isLoading = false,
            state.posts = [],
           state.error = action.error.message
        })
    })
})
export const { empty_posts } = postSlice.actions

export default postSlice.reducer
