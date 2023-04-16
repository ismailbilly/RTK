import { createSlice } from '@reduxjs/toolkit'
import fakeData from '../../../fakeData'

const initialState = {
  data: fakeData,
  isLoading: true
}

export const anotherSlice = createSlice({
  name: 'another',
  initialState,
  reducers: {
    clearAll: (state) => {
      state.data = [];
    },
    pushInside:(state)=>{
        state.isLoading = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { clearAll, pushInside } = anotherSlice.actions

export default anotherSlice.reducer