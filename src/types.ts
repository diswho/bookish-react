export type Book = {
  id: number;
  name: string;
  description?: string;
  reviews?: Review[];
};
export type Review = {
  id: number;
  bookId: number;
  name: string;
  date: string;
  content: string;
};
export type AddReviewRequest = {
  id: number;
  name: string;
  content: string;
};
export type UpdateReviewRequest = {
  bookId: number;
  reviewId: number;
  content: string;
};
