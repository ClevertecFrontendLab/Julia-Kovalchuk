export interface IReview {
  reviewerName: string;
  reviewerAvatar: string;
  review: string;
  stars: number;
  date: string;
}

export interface IBook {
  id: string;
  image: string[];
  category: string;
  author: string;
  title: string;
  rating: number | string;
  year: number;
  isBooked: boolean;
  bookedTill: string;
  publishing?: string;
  pages?: string;
  binding?: string;
  format?: string;
  weight?: string;
  ISBN?: string;
  manufacturer?: string;
  comments?: IReview[];
}

export interface ICategory {
  name: string;
  path: string;
  id: number;
}

export interface IBookingInfo {
  id: number;
  order: boolean;
  dateOrder: string | null;
  customerId: number | null;
  customerFirstName: string | null;
  customerLastName: string | null;
}

export interface IHistoryInfo {
  id: number;
  userId: number;
}

export interface IBookImage {
  url: string | null;
}

export interface IUser {
  commentUserId: number;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
}

export interface IComment {
  id: string;
  rating: number;
  text: string | null;
  createdAt: string;
  user: IUser;
}

export interface IDelivery {
  id: number;
  handed: boolean;
  dateHandedFrom: string | null;
  dateHandedTo: string | null;
  recipientId: number | null;
  recipientFirstName: string | null;
  recipientLastName: string | null;
}

export interface IBookShortInfo {
  issueYear: string | null;
  rating: number | null;
  title: string;
  authors: string[] | null;
  image: IBookImage;
  categories: string[] | null;
  id: number;
  booking: null | IBookingInfo;
  delivery: null | IDelivery;
  histories: null | IHistoryInfo[];
}

export interface IBookInfo {
  id: number;
  title: string;
  rating: null | number;
  issueYear: string | null;
  description: string | null;
  publish: string | null;
  pages: string | null;
  cover: string | null;
  weight: string | null;
  format: string | null;
  ISBN: string | null;
  producer: string | null;
  authors: string[] | null;
  images: IBookImage[];
  categories: string[];
  comments: null | IComment[];
  booking: null | IBookingInfo;
  delivery: null | IDelivery;
  histories: null | IHistoryInfo[];
}

export type SortType = 'down' | 'up';
