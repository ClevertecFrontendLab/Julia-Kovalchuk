/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { bookAPI } from '../../services/book-api';
import { IRegisterResponse, SignUpValues } from '../../types/types';

interface IRegisterState {
  registerStep: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  isRegisterLoading: boolean;
  errorRegister: null | string;
  errorStatus: number | null;
}

const initialState: IRegisterState = {
  registerStep: '1',
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  isRegisterLoading: false,
  errorRegister: null,
  errorStatus: null,
};

const fetchRegister = createAsyncThunk<IRegisterResponse, SignUpValues>(
  'register/fetchRegister',
  async (userData, { rejectWithValue }) => {
    try {
      return await bookAPI.signUp(userData);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.response?.data);
    }
  }
);

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegisterStep(state, { payload }: PayloadAction<string>) {
      state.registerStep = payload;
    },
    setUsername(state, { payload }: PayloadAction<string>) {
      state.username = payload;
    },
    setPassword(state, { payload }: PayloadAction<string>) {
      state.password = payload;
    },
    setFirstName(state, { payload }: PayloadAction<string>) {
      state.firstName = payload;
    },
    setLastName(state, { payload }: PayloadAction<string>) {
      state.lastName = payload;
    },
    setPhone(state, { payload }: PayloadAction<string>) {
      state.phone = payload;
    },
    setEmail(state, { payload }: PayloadAction<string>) {
      state.email = payload;
    },
    clearError(state) {
      state.errorRegister = null;
      state.errorStatus = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRegister.pending, (state) => {
      state.isRegisterLoading = true;
      state.errorRegister = null;
    });
    builder.addCase(fetchRegister.fulfilled, (state) => {
      state.isRegisterLoading = false;
      state.registerStep = 'success';
    });
    builder.addCase(fetchRegister.rejected, (state, { payload }: any) => {
      state.isRegisterLoading = false;
      state.errorRegister = 'Что-то пошло не так. Попробуйте еще раз';
      state.registerStep = 'error';
      state.errorStatus = payload.error.status;
    });
  },
});

export default registerSlice.reducer;
export { fetchRegister };
export const { setRegisterStep, setUsername, setFirstName, setLastName, setPassword, setPhone, setEmail, clearError } =
  registerSlice.actions;
