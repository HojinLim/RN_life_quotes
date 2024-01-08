import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {Quote} from 'quotesy';

const initialState: Quote[] = [];

const favoriteQuotesSlice = createSlice({
  name: 'favorite_quotes',
  initialState,
  reducers: {
    addQuote: (state, action: PayloadAction<Quote>) => {
      return [...state, {...action.payload, favorite: true}];
    },
    removeQuote: (state, action: PayloadAction<string>) => {
      const textToRemove = action.payload;
      return state.filter(quote => quote.text !== textToRemove);
    },
    resetFavorite: state => [],
  },
});

export const {addQuote, removeQuote, resetFavorite} =
  favoriteQuotesSlice.actions;
export const favoriteReducer = favoriteQuotesSlice.reducer;
