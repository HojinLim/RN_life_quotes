import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: string = 'all';

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    toggleMode: (state, action: PayloadAction<string>) => {
      // Use the action payload to update the state
      return action.payload;
    },
  },
});

export const {toggleMode} = settingSlice.actions;
export const settingSliceReducer = settingSlice.reducer;
