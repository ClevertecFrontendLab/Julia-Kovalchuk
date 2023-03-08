import axios from 'axios';

import { IBookInfo, IBookShortInfo, ICategory, IRegisterResponse, IUserResponse, SignUpValues } from '../types/types';

enum Endpoint {
  CATEGORIES = 'categories',
  ALLBOOKS = 'books',
  DETAILS = 'books/',
  REGISTER = '/auth/local/register',
}

class BookAPI {
  private readonly BASE_URL = 'https://strapi.cleverland.by/api';

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getCategories() {
    const { data } = await this.API.get<ICategory[]>(Endpoint.CATEGORIES);

    return data;
  }

  public async getAllBooks() {
    const { data } = await this.API.get<IBookShortInfo[]>(Endpoint.ALLBOOKS);

    return data;
  }

  public async getBookDetails(id: string) {
    const { data } = await this.API.get<IBookInfo>(`${Endpoint.DETAILS}${id}`);

    return data;
  }

  public async signUp(userData: SignUpValues) {
    const { data } = await this.API.post<IRegisterResponse>(`${Endpoint.REGISTER}`, userData);

    return data;
  }
}

export const bookAPI = new BookAPI();
