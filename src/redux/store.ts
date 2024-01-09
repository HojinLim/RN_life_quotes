import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {allQuotesReducer} from './slices/allQuoteSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import {favoriteReducer} from './slices/favoriteQuoteSlice';
import {settingSliceReducer} from './slices/settingSlice';

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
};
const rootReducer = combineReducers({
  allQuotesReducer,
  favoriteReducer,
  settingSliceReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        warnAfter: 50, // or any other value
      },
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
