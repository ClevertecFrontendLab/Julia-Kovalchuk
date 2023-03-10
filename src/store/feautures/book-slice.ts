/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { bookAPI } from '../../services/book-api';
import { IBookInfo } from '../../types/types';

interface IBookState {
  book: IBookInfo;
  isLoading: boolean;
  error: null | string | undefined;
}

const initialState: IBookState = {
  book: {} as IBookInfo,
  isLoading: false,
  error: null,
};

const fetchBook = createAsyncThunk<IBookInfo, string, { rejectValue: string }>(
  'book/fetchBook',
  async (id, { rejectWithValue }) => {
    const token = localStorage.getItem('jwt');

    try {
      return await bookAPI.getBookDetails(id, token as string);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  }
);

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBook.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.book = payload;
    });
    builder.addCase(fetchBook.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = 'Что-то пошло не так. Обновите страницу через некоторое время.';
    });
  },
});

export default bookSlice.reducer;
export { fetchBook };
