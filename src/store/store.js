import { configureStore } from '@reduxjs/toolkit'
import { fitSquadSlice } from './fitSquad'
import { authSlice } from './auth'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    fitSquad: fitSquadSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
    serializableCheck: false,
  })
})