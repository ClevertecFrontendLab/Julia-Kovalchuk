/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { bookAPI } from '../../services/book-api';
import {
  ForgotPasswordValues,
  IForgotPasswordResponse,
  IResetPasswordResponse,
  IResetPasswordValues,
} from '../../types/types';

interface IResetPasswordState {
  resetPasswordStep: string;
  isResetLoading: boolean;
  errorResetMessage: null | string;
}

const initialState: IResetPasswordState = {
  resetPasswordStep: 'reset',
  isResetLoading: false,
  errorResetMessage: null,
};

const fetchResetPassword = createAsyncThunk<IResetPasswordResponse, IResetPasswordValues, { rejectValue: any }>(
  'resetPassword/fetchResetPassword',
  async (resetData, { rejectWithValue }) => {
    try {
      return await bookAPI.resetPassword(resetData);
    } catch (error) {
      const axiosError = error as AxiosError;

      if (!axiosError.response) {
        throw error;
      }

      return rejectWithValue(axiosError);
    }
  }
);

const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchResetPassword.pending, (state) => {
      state.isResetLoading = true;
      state.errorResetMessage = null;
    });
    builder.addCase(fetchResetPassword.fulfilled, (state, { payload }) => {
      state.isResetLoading = false;
      state.errorResetMessage = null;
      state.resetPasswordStep = 'success';
    });
    builder.addCase(fetchResetPassword.rejected, (state, { payload }: any) => {
      state.isResetLoading = false;
      state.errorResetMessage = payload.message;
      state.resetPasswordStep = 'error';
    });
  },
});

export default resetPasswordSlice.reducer;
export { fetchResetPassword };
// export const {} = forgotPasswordSlice.actions;
