import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { appReducer } from "./appSlice"
import { authReducer } from "../features/auth/auth.slice"
import { dataReducer } from "../features/packs/packs.slice"

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    data: dataReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
