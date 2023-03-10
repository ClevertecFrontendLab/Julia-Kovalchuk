/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { bookAPI } from '../../services/book-api';
import { IAuthResponse, SignInValues } from '../../types/types';

interface IAuthState {
  authStep: string;
  isAuth: boolean;
  isAuthLoading: boolean;
  errorAuthMessage: null | string;
  errorStatus: number | null;
}

const initialState: IAuthState = {
  authStep: 'auth',
  isAuth: false,
  isAuthLoading: false,
  errorAuthMessage: null,
  errorStatus: null,
};

const fetchAuth = createAsyncThunk<IAuthResponse, SignInValues>(
  'auth/fetchAuth',
  async (userData, { rejectWithValue }) => {
    try {
      return await bookAPI.signIn(userData);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthStep(state, { payload }: PayloadAction<string>) {
      state.authStep = payload;
    },
    clearAuthError(state) {
      state.errorAuthMessage = null;
      state.errorStatus = null;
    },
    unlogin(state) {
      localStorage.clear();
      state.isAuth = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAuth.pending, (state) => {
      state.isAuthLoading = true;
      state.errorStatus = null;
      state.isAuth = false;
      localStorage.clear();
    });
    builder.addCase(fetchAuth.fulfilled, (state, { payload }) => {
      state.isAuthLoading = false;
      localStorage.setItem('jwt', payload.jwt);
      state.isAuth = true;
      localStorage.setItem('isAuth', 'true');
    });
    builder.addCase(fetchAuth.rejected, (state, { payload }: any) => {
      state.isAuthLoading = false;
      state.errorAuthMessage = 'Неверный логин или пароль!';
      state.errorStatus = payload.error.status;
      state.isAuth = false;
      if (payload.error.status !== 400) state.authStep = 'error';
      localStorage.clear();
    });
  },
});

export default authSlice.reducer;
export { fetchAuth };
export const { clearAuthError, setAuthStep, unlogin } = authSlice.actions;
