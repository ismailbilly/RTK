import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import anotherReducer from './features/counter/anotherSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    anotherOne:anotherReducer
  },
})