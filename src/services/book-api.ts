import axios from 'axios';

import {
  IAuthResponse,
  IBookInfo,
  IBookShortInfo,
  ICategory,
  IRegisterResponse,
  SignInValues,
  SignUpValues,
} from '../types/types';

enum Endpoint {
  CATEGORIES = 'categories',
  ALLBOOKS = 'books',
  DETAILS = 'books/',
  REGISTER = '/auth/local/register',
  AUTH = '/auth/local',
}

class BookAPI {
  private readonly BASE_URL = 'https://strapi.cleverland.by/api';

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  // private readonly token = localStorage.getItem('jwt');

  public async getCategories(token: string) {
    const { data } = await this.API.get<ICategory[]>(Endpoint.CATEGORIES, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return data;
  }

  public async getAllBooks(token: string) {
    const { data } = await this.API.get<IBookShortInfo[]>(Endpoint.ALLBOOKS, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return data;
  }

  public async getBookDetails(id: string, token: string) {
    const { data } = await this.API.get<IBookInfo>(`${Endpoint.DETAILS}${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return data;
  }

  public async signUp(userData: SignUpValues) {
    const { data } = await this.API.post<IRegisterResponse>(`${Endpoint.REGISTER}`, userData);

    return data;
  }

  public async signIn(userData: SignInValues) {
    const { data } = await this.API.post<IAuthResponse>(`${Endpoint.AUTH}`, userData);

    return data;
  }
}

export const bookAPI = new BookAPI();
