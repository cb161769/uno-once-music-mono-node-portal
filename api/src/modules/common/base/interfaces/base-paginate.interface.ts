export interface IPaginateBase<T> {
  page: number;
  limit: number;
  total: number;
  pages: number;
  results: T[];
}
