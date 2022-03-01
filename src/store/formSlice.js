import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    data: { hasPhone: false },
  },
  reducers: {
    setValues(state, action) {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { setValues } = formSlice.actions;

export default formSlice.reducer;
