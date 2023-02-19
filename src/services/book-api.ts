import axios from 'axios';

import { IBookInfo, IBookShortInfo, ICategory } from '../types/types';

enum Endpoint {
  CATEGORIES = 'categories',
  ALLBOOKS = 'books',
  DETAILS = 'books/',
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
}

export const bookAPI = new BookAPI();
