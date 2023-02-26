/* eslint-disable @typescript-eslint/no-unused-expressions */
import { IBookShortInfo, SortType } from '../types/types';

export const sortBooks = (sortType: SortType, books: IBookShortInfo[] | []): IBookShortInfo[] | [] => {
  const checkNull = (value: number | null) => {
    let result;

    value === null ? (result = -1) : (result = value);

    return result;
  };

  const sortableArray = [...books];

  if (sortType === 'down') {
    return sortableArray.sort((a, b) => checkNull(b.rating) - checkNull(a.rating));
  }

  return sortableArray.sort((a, b) => checkNull(a.rating) - checkNull(b.rating));
};
