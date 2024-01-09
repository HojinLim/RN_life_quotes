import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Quote, parse_json} from 'quotesy';
import {shuffleArray} from '../../utils/shuffleArrayUtil';

const initialState: Quote[] = parse_json();

const allQuotesSlice = createSlice({
  name: 'all_quotes',
  initialState,
  reducers: {
    shuffleAllQuotes: state => {
      const shuffledQuotes = shuffleArray(state);
      return shuffledQuotes; // Use 'all_quotes' for consistency
    },
    changeLike: (state, action: PayloadAction<string>) => {
      return state.map(quote =>
        quote.text === action.payload
          ? {...quote, favorite: !quote.favorite}
          : quote,
      );
    },
    removeStar: (state, action: PayloadAction<Quote>) => {
      const {text} = action.payload;
      return state.map(quote =>
        quote.text === text ? {...quote, favorite: false} : quote,
      );
    },
    removeAllStar: state => {
      return state.map(quote => ({...quote, favorite: false}));
    },
    resetQuotes: state => {
      return parse_json();
    },
  },
});

export const {
  shuffleAllQuotes,
  resetQuotes,
  changeLike,
  removeStar,
  removeAllStar,
} = allQuotesSlice.actions;
export const allQuotesReducer = allQuotesSlice.reducer;
