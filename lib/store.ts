import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/lib/feature/user.slice'
import loginReducer from '@/lib/feature/login.slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      login: loginReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']