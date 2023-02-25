/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { bookAPI } from '../../services/book-api';
import { IBookShortInfo, SortType } from '../../types/types';
import { sortBooks } from '../../utils/books-sorting';

interface IAllBooksState {
  allBooks: IBookShortInfo[];
  renderedBooks: IBookShortInfo[];
  isLoading: boolean;
  error: null | string | undefined;
  sortType: SortType;
}

const initialState: IAllBooksState = {
  allBooks: [],
  renderedBooks: [],
  isLoading: false,
  error: null,
  sortType: 'down',
};

const fetchAllBooks = createAsyncThunk<IBookShortInfo[], undefined, { rejectValue: string }>(
  'allBooks/fetchAllBooks',
  async (_, { rejectWithValue }) => {
    try {
      return await bookAPI.getAllBooks();
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  }
);

const allBooksSlice = createSlice({
  name: 'allBooks',
  initialState,
  reducers: {
    changeSortType(state) {
      state.sortType === 'down' ? (state.sortType = 'up') : (state.sortType = 'down');
    },
    sortRenderedBooks(state) {
      state.renderedBooks = sortBooks(state.sortType, state.renderedBooks);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllBooks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.allBooks = payload;
      state.renderedBooks = sortBooks(state.sortType, state.allBooks);
    });
    builder.addCase(fetchAllBooks.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Что-то пошло не так. Обновите страницу через некоторое время.';
    });
  },
});

export default allBooksSlice.reducer;
export { fetchAllBooks };

export const { changeSortType, sortRenderedBooks } = allBooksSlice.actions;
