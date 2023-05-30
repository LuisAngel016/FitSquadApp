import { configureStore } from '@reduxjs/toolkit'
import { fitSquadSlice } from './fitSquad'
import { AuthSlice } from './auth'

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    fitSquad: fitSquadSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
    serializableCheck: false,
  })
})