import { configureStore } from '@reduxjs/toolkit';

import allBooksReducer from './feautures/all-books-slice';
import bookReducer from './feautures/book-slice';
import categoriesReducer from './feautures/categories-slice';
import registerReduser from './feautures/register-slice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    allBooks: allBooksReducer,
    book: bookReducer,
    register: registerReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
