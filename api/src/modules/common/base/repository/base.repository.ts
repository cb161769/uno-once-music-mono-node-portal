import { BaseModel } from '../models/base.model';
import { Repository, FindOneOptions, FindOptionsWhere } from 'typeorm';
import { PaginateRequest } from '../models/paginate-request.model';
import { IPaginateBase } from '../interfaces/base-paginate.interface';

export interface IBaseRepository<T> {
  create(data: T): Promise<T | null>;
  update(id: number, data: T): Promise<boolean>;
  delete(id: number, where?: FindOptionsWhere<T>): Promise<boolean>;
  findAll(paginate?: PaginateRequest<T>): Promise<IPaginateBase<T>>;
  findById(id: number, where?: FindOptionsWhere<T>): Promise<T | null>;
}

export default abstract class BaseRepository<T extends BaseModel>
  implements IBaseRepository<T>
{
  private readonly _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  create(data: T): Promise<T> {
    data.createdAt = new Date();
    return this._repository.save(data);
  }

  async update(id: number, data: T): Promise<boolean> {
    data.updatedAt = new Date();
    const response = await this._repository.update(id, data as any);
    return response !== null;
  }

  async delete(id: number, where: FindOptionsWhere<T> = {}): Promise<boolean> {
    const entity = await this.findById(id, where);
    if (entity === null) return false;

    entity.isDeleted = true;
    entity.updatedAt = new Date();

    return await this.update(id, entity);
  }

  async findAll(
    paginate: PaginateRequest<T> = {
      page: 1,
      limit: 10,
      isAll: false,
      where: {},
      relations: {},
    },
  ): Promise<IPaginateBase<T>> {
    if (paginate.isAll === true) {
      return {
        results: await this._repository.find({
          where: { isDeleted: false, ...paginate.where },
          relations: paginate.relations,
        }),
      } as IPaginateBase<T>;
    }

    const total = await this._repository.count({
      where: { isDeleted: false, ...paginate.where },
      relations: paginate.relations,
    });
    const pages = Math.ceil(total / paginate.limit);

    return {
      page: Number(paginate.page),
      limit: Number(paginate.limit),
      pages: pages,
      total: total,
      results: await this._repository.find({
        skip: paginate.limit * (paginate.page - 1),
        take: paginate.limit,
        where: { isDeleted: false, ...paginate.where },
        relations: paginate.relations,
      }),
    } as IPaginateBase<T>;
  }

  findById(id: number, where: FindOptionsWhere<T> = {}): Promise<T | null> {
    return this._repository.findOne({
      where: { id: id, isDeleted: false, ...where },
    } as FindOneOptions<T>);
  }
}
