/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { bookAPI } from '../../services/book-api';
import { IBookShortInfo } from '../../types/types';

interface IAllBooksState {
  allBooks: IBookShortInfo[];
  isLoading: boolean;
  error: null | string | undefined;
}

const initialState: IAllBooksState = {
  allBooks: [],
  isLoading: false,
  error: null,
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
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllBooks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.allBooks = payload;
    });
    builder.addCase(fetchAllBooks.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default allBooksSlice.reducer;
export { fetchAllBooks };
