import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter : 0,
    tagLine : 'Default Tagline'
}
const UserSlice = createSlice({
    name:'UserSlice',
    initialState,
    reducers:{
        increment : (state)=>{
            state.counter+=1;
        },
        decrement : (state)=>{
            state.counter-=1;
        },
        reset : (state)=>{
            state.counter=0;
        },
        setTagLine : (state,action)=>{
            state.tagLine = action.payload;
        }
    }
});

export const {increment,decrement,reset,setTagLine} = UserSlice.actions;
export default UserSlice.reducer;
/*
export const { increment } = {
                                increment : ()=>{
                                    return {type:'UserSlice/increment',....}    
                                },
                                decrement : ()=>{
                                    return {type:'UserSlice/decrement',....}    
                                },
                                ...
                            }

increment = ()=>{
              return {type:'UserSlice/increment',....}    
            }

increment() returns ---> {type:'UserSlice/increment',....}
*/