import { IBookShortInfo, ICategoryAmount } from '../types/types';

export const getCategoriesAmount = (books: IBookShortInfo[]): ICategoryAmount => {
  let result: string[] = [];

  books.forEach((book: IBookShortInfo): void => {
    if (book.categories !== null) {
      result = result.concat(book.categories);
    }
  });

  return result.reduce((acc: ICategoryAmount, category: string) => {
    acc[category] = (acc[category] || 0) + 1;

    return acc;
  }, {});
};
