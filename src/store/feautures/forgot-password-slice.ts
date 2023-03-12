/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { bookAPI } from '../../services/book-api';
import { ForgotPasswordValues, IForgotPasswordResponse } from '../../types/types';

interface IForgotPasswordState {
  forgotPasswordStep: string;
  isForgotLoading: boolean;
  errorForgotMessage: null | string;
}

const initialState: IForgotPasswordState = {
  forgotPasswordStep: 'forgot',
  isForgotLoading: false,
  errorForgotMessage: null,
};

const fetchForgotPassword = createAsyncThunk<IForgotPasswordResponse, ForgotPasswordValues, { rejectValue: any }>(
  'forgot/fetchForgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      return await bookAPI.forgotPassword(email);
    } catch (error) {
      const axiosError = error as AxiosError;

      if (!axiosError.response) {
        throw error;
      }

      return rejectWithValue(axiosError);
    }
  }
);

const forgotPasswordSlice = createSlice({
  name: 'forgot',
  initialState,
  reducers: {
    // setAuthStep(state, { payload }: PayloadAction<string>) {
    //   state.authStep = payload;
    // },
  },
  extraReducers(builder) {
    builder.addCase(fetchForgotPassword.pending, (state) => {
      state.isForgotLoading = true;
      state.errorForgotMessage = null;
    });
    builder.addCase(fetchForgotPassword.fulfilled, (state, { payload }) => {
      state.isForgotLoading = false;
      state.errorForgotMessage = null;
      state.forgotPasswordStep = 'success';
    });
    builder.addCase(fetchForgotPassword.rejected, (state, { payload }: any) => {
      state.isForgotLoading = false;
      state.errorForgotMessage = payload.message;
      state.forgotPasswordStep = 'error';
    });
  },
});

export default forgotPasswordSlice.reducer;
export { fetchForgotPassword };
// export const {} = forgotPasswordSlice.actions;
