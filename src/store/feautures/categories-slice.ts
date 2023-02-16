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
    try {
      return await bookAPI.getCategories();
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
      state.errorCategories = payload;
    });
  },
});

export default categoriesSlice.reducer;
export { fetchCategories };

// export const { createNextPage, clearMovies } = moviesSlice.actions;
