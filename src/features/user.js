import {createSlice} from '@reduxjs/toolkit';

const initialState = {name: '',username:'', email: ''};

export const userSlice = createSlice({
    name: "user",
    initialState: {value: initialState },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialState;
        }
    },
});

export const { login,logout } = userSlice.actions;

export default userSlice.reducer;