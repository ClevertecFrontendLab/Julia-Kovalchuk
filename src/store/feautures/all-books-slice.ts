/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { bookAPI } from '../../services/book-api';
import { IBookShortInfo, ICategoryAmount, SortType } from '../../types/types';
import { sortBooks } from '../../utils/books-sorting';
import { getCategoriesAmount } from '../../utils/get-categories-amount';

interface IAllBooksState {
  allBooks: IBookShortInfo[];
  renderedBooks: IBookShortInfo[];
  foundBooks: IBookShortInfo[];
  isLoading: boolean;
  error: null | string | undefined;
  sortType: SortType;
  searchValue: string;
  categoriesAmount: ICategoryAmount;
}

const initialState: IAllBooksState = {
  allBooks: [],
  renderedBooks: [],
  foundBooks: [],
  searchValue: '',
  isLoading: false,
  error: null,
  sortType: 'down',
  categoriesAmount: {} as ICategoryAmount,
};

const fetchAllBooks = createAsyncThunk<IBookShortInfo[], undefined, { rejectValue: string }>(
  'allBooks/fetchAllBooks',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('jwt');

    try {
      return await bookAPI.getAllBooks(token as string);
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
    sortBySortType(state) {
      state.renderedBooks = sortBooks(state.sortType, state.renderedBooks);
    },
    sortByCategory(state, { payload }: PayloadAction<string>) {
      const filtredBooks = state.allBooks.filter((book) => book.categories?.includes(payload));

      state.renderedBooks = sortBooks(state.sortType, filtredBooks);
    },
    renderAllBooks(state) {
      state.renderedBooks = sortBooks(state.sortType, state.allBooks);
    },
    updateSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
    searchBooks(state, { payload }: PayloadAction<string>) {
      state.foundBooks = state.renderedBooks.filter((book) =>
        book.title.toLocaleLowerCase().includes(payload.toLocaleLowerCase())
      );
    },
    resetSearchBooks(state) {
      state.foundBooks = [];
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
      state.categoriesAmount = getCategoriesAmount(payload);
    });
    builder.addCase(fetchAllBooks.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Что-то пошло не так. Обновите страницу через некоторое время.';
    });
  },
});

export default allBooksSlice.reducer;
export { fetchAllBooks };

export const {
  changeSortType,
  sortBySortType,
  sortByCategory,
  renderAllBooks,
  updateSearchValue,
  searchBooks,
  resetSearchBooks,
} = allBooksSlice.actions;
