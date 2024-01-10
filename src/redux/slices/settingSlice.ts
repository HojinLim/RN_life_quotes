import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {QuoteSetting} from '../../types/settingType';
const initialState: QuoteSetting = {
  mode: 'all',
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    toggleMode: (state, action: PayloadAction<'all' | 'favorite'>) => {
      // Use the action payload to update the state
      return {...state, mode: action.payload};
    },
  },
});

export const {toggleMode} = settingSlice.actions;
export const settingSliceReducer = settingSlice.reducer;
