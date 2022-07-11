import {createSlice} from '@reduxjs/toolkit';

const initialState = {name: '',username:'', email: ''};

export const registerSlice = createSlice({
    name: "register",
    initialState: {value: initialState },
    reducers: {
        register: (state, action) => {
            state.value = action.payload
        }
    },
});

export const { register } = registerSlice.actions;

export default registerSlice.reducer;