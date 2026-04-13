import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    userObj : {},
    userArray : [],
    index : -1,
    message : '',
    navShow : "home"
}

const UserSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers:{
        addUser : (state,action)=>{
            console.log("-------------> ",action);
            state.userArray.push(action.payload);
            state.userArray = [...state.userArray];
        },
        deleteUser : (state,action)=>{
            console.log("-------------> ",action);
            state.userArray.splice(action.payload.index,1);
            state.userArray = [...state.userArray];
        },
        updateUser:(state,action)=>{
            console.log("+++++++++++++++: ",action.payload);
            state.userArray.splice(action.payload.index,1,action.payload);
            state.userArray = [...state.userArray];
        }
    }
});

export const {addUser,deleteUser,updateUser} = UserSlice.actions;
export default UserSlice.reducer;