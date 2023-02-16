import axios from 'axios';

import { IBookShortInfo, ICategory } from '../types/types';
// import {
//   IMovieDetailsAPI,
//   IMoviesAPIResponse,
//   ISearchParams,
// } from 'types/types';
// import { getRandomNumber } from 'utils/getRandomNumber';

class BookAPI {
  private readonly BASE_URL = 'https://strapi.cleverland.by/api';

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getCategories() {
    const { data } = await this.API.get<ICategory[]>('categories');

    return data;
  }

  public async getAllBooks() {
    const { data } = await this.API.get<IBookShortInfo[]>('books');

    return data;
  }
  // public async getDetailsById(id: string) {
  //   const params = {
  //     i: id,
  //   };

  //   const { data } = await this.API.get<IMovieDetailsAPI>('', { params });

  //   return data;
  // }

  // public async getNewMovies(page: number) {
  //   const currentYear = new Date().getFullYear();

  //   const params = {
  //     s: this.getRandomWord(this.wordForMovie),
  //     y: currentYear,
  //     page,
  //   };

  //   const { data } = await this.API.get<IMoviesAPIResponse>('', { params });

  //   return data;
  // }

  // public async getMoviesRecommendations(
  //   name: string,
  //   type: string,
  //   year: string,
  // ) {
  //   const params = {
  //     s: name,
  //     type,
  //     y: year,
  //   };

  //   const { data } = await this.API.get<IMoviesAPIResponse>('', { params });

  //   return data;
  // }

  // public async getMovieBySearchParams(
  //   searchParams: ISearchParams,
  // ): Promise<IMoviesAPIResponse> {
  //   const params = {
  //     s: searchParams.title,
  //     type: searchParams.type,
  //     y: searchParams.year,
  //     page: searchParams.page,
  //   };

  //   const { data } = await this.API.get<IMoviesAPIResponse>('', {
  //     params,
  //   });

  //   return data;
  // }
}

export const bookAPI = new BookAPI();
