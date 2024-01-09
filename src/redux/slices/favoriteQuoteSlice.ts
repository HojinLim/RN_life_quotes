import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {Quote} from 'quotesy';
import {shuffleArray} from '../../utils/shuffleArrayUtil';

const initialState: Quote[] = [];

const favoriteQuotesSlice = createSlice({
  name: 'favorite_quotes',
  initialState,
  reducers: {
    addQuote: (state, action: PayloadAction<Quote>) => {
      return [...state, {...action.payload, favorite: true}];
    },
    shuffleQuotes: state => {
      const shuffledQuotes = shuffleArray(state);
      return shuffledQuotes;
    },
    removeQuote: (state, action: PayloadAction<Quote>) => {
      const targetText = action.payload.text;
      return state.filter(quote => quote.text !== targetText);
    },
    resetFavorite: state => [],
  },
});

export const {addQuote, removeQuote, resetFavorite} =
  favoriteQuotesSlice.actions;
export const favoriteReducer = favoriteQuotesSlice.reducer;
