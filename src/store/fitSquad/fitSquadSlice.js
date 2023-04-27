import { createSlice } from '@reduxjs/toolkit';

export const fitSquadSlice = createSlice({
    name: 'fitSquad',
    initialState: {
        counter: 10,
    },
    reducers: {
        increment: (state, /* action */ ) => {
            
        }
    }

});

// Action creators are generated for each case reducer function
export const { increment } = fitSquadSlice.actions;