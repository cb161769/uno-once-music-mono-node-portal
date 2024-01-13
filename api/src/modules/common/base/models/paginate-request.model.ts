import { FindOptionsRelations, FindOptionsWhere } from 'typeorm';
export class PaginateRequest<T> {
  page = 1;
  limit = 10;
  isAll = false;
  where?: FindOptionsWhere<T>;
  relations?: FindOptionsRelations<T>;
}
