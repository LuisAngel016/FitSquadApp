import { createSlice } from '@reduxjs/toolkit';

export const fitSquadSlice = createSlice({
    name: 'fitSquad',
    initialState: {
        isLoadingFile: false,
        users: [

        ],
        selectUser: null,
        errorMessage: null,
    },
    reducers: {
        // onStartLoadingFile: (state) => {
        //     state.isLoadingFile = true;
        // },
        // onStopLoadingFile: (state) => {
        //     state.isLoadingFile = false;
        // },
        onSetIsloadingFile: (state, { payload }) => {
            state.isLoadingFile = {
                name: payload.name,
                type: payload.type,
                size: payload.size,
            };
        },          
        onClearIsLoadingFile: (state) => {
            state.isLoadingFile = false;
        },
        onSetError: (state, { payload }) => {
            state.isLoadingFile = null;
            state.errorMessage = payload;
        },
        onSetSelectUser: ( state) => {
            state.selectUser = true;
        },
        onClearSelectUser: (state, { payload } ) => {
            state.selectUser = false;
            state.errorMessage = payload;
        },          
    },
    serializeReducers: true, // elimina los valores no serializables automáticamente
});


// Action creators are generated for each case reducer function
export const {
    onClearIsLoadingFile,
    onSetIsloadingFile,
    onSetError,
    onSetSelectUser,
    onClearSelectUser,
    // onStartLoadingFile,
    // onStopLoadingFile,
} = fitSquadSlice.actions;