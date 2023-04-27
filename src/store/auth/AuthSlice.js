import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
        
    },
    reducers: {
        increment: (state, /* action */ ) => {

        }
    }

});

// Action creators are generated for each case reducer function
export const { increment } = AuthSlice.actions;