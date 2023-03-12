/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { bookAPI } from '../../services/book-api';
import { ICategory } from '../../types/types';

interface ICategoriesState {
  categories: ICategory[];
  isCategoriesLoading: boolean;
  errorCategories: null | string | undefined;
}

const initialState: ICategoriesState = {
  categories: [],
  isCategoriesLoading: false,
  errorCategories: null,
};

const fetchCategories = createAsyncThunk<ICategory[], undefined, { rejectValue: string }>(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('jwt');

    try {
      return await bookAPI.getCategories(token as string);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isCategoriesLoading = true;
      state.errorCategories = null;
    });
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.isCategoriesLoading = false;
      state.categories = payload;
    });
    builder.addCase(fetchCategories.rejected, (state, { payload }) => {
      state.isCategoriesLoading = false;
      state.errorCategories = 'Что-то пошло не так. Обновите страницу через некоторое время.';
    });
  },
});

export default categoriesSlice.reducer;
export { fetchCategories };
