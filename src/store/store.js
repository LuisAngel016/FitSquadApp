import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice } from './auth'
import { fitSquadSlice } from './fitSquad'

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    fitSquad: fitSquadSlice.reducer,
  },
})