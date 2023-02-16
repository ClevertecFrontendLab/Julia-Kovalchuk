import { configureStore } from '@reduxjs/toolkit';

import allBooksReducer from './feautures/all-books-slice';
import categoriesReducer from './feautures/categories-slice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    allBooks: allBooksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
