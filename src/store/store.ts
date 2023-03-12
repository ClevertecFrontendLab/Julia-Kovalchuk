import { configureStore } from '@reduxjs/toolkit';

import allBooksReducer from './feautures/all-books-slice';
import authReduser from './feautures/auth-slice';
import bookReducer from './feautures/book-slice';
import categoriesReducer from './feautures/categories-slice';
import forgotPasswordReduser from './feautures/forgot-password-slice';
import registerReduser from './feautures/register-slice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    allBooks: allBooksReducer,
    book: bookReducer,
    register: registerReduser,
    auth: authReduser,
    forgot: forgotPasswordReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
