import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filmSlice from '../features/film/filmSlice';
import genreSlice from '../features/genre/genreSlice';

export const store = configureStore({
  reducer: {
    film:filmSlice,
    genre:genreSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
