import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import anotherReducer from './features/counter/anotherSlice'
import postReducer from './features/counter/asyncSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    anotherOne:anotherReducer,
    post:postReducer
  },
})