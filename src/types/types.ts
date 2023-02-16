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
  dateOrder: string;
  customerId: number;
  customerFirstName: string;
  customerLastName: string;
}

export interface IHistoryInfo {
  id: number;
  userId: number;
}

export interface IBookImage {
  url: string;
}

export interface IUser {
  commentUserId: number;
  firstName: string;
  lastName: string;
  avatarUrl: string;
}

export interface IComment {
  id: string;
  rating: number;
  text: string;
  createdAt: string;
  user: IUser;
}

export interface IDelivery {
  id: number;
  handed: boolean;
  dateHandedFrom: string;
  dateHandedTo: string;
  recipientId: number;
  recipientFirstName: string;
  recipientLastName: string;
}

export interface IBookShortInfo {
  issueYear: string;
  rating: number | null;
  title: string;
  authors: string[];
  image: IBookImage;
  categories: string[];
  id: number;
  booking: null | IBookingInfo;
  delivery: null;
  histories: null | IHistoryInfo[];
}

export interface IBookInfo {
  id: number;
  title: string;
  rating: null | number;
  issueYear: string;
  description: string;
  publish: string;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
  authors: string[];
  images: IBookImage[];
  categories: string[];
  comments: null | IComment;
  booking: null | IBookingInfo;
  delivery: null | IDelivery;
  histories: null | IHistoryInfo[];
}
