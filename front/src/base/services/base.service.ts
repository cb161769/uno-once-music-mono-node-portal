import axiosInstance from "@/config/axios.config";
import {
  IPaginate,
  IPaginationResult,
} from "../interfaces/pagination.interface";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export class BaseService {
  baseEndpoint;
  axiosInstance;
  constructor(baseEndpoint: "auth") {
    this.baseEndpoint = `${import.meta.env.VITE_BASE_API}/${baseEndpoint}`;
    this.axiosInstance = axiosInstance;
  }

  async create<TInput, TResponse>(
    model: TInput,
    newEndpoint: string = "",
    config?: AxiosRequestConfig<TInput>
  ): Promise<AxiosResponse<TResponse>> {
    const url = `${this.baseEndpoint}/${newEndpoint}`;
    const response = await axiosInstance.post<TResponse>(
      newEndpoint ? url : this.baseEndpoint,
      model,
      config
    );

    return response;
  }

  async getAllPaginated<TData>(
    model: IPaginate = { page: 1, qyt: 10 },
    newEndpoint: string = "",
    config?: AxiosRequestConfig
  ) {
    const response = await axiosInstance.get<IPaginationResult<TData>>(
      newEndpoint ? `${this.baseEndpoint}/${newEndpoint}` : this.baseEndpoint,
      {
        params: model,
        ...config,
      }
    );

    return response;
  }

  async getOne<TData>(
    id: string,
    newEndpoint: string = "",
    config?: AxiosRequestConfig
  ) {
    const response = await axiosInstance.get<TData>(
      newEndpoint
        ? `${this.baseEndpoint}/${newEndpoint}/${id}`
        : `${this.baseEndpoint}/${id}`,
      config
    );

    return response;
  }

  async remove(
    id: string,
    newEndpoint: string = "",
    config?: AxiosRequestConfig
  ) {
    const response = await axiosInstance.delete<boolean>(
      newEndpoint
        ? `${this.baseEndpoint}/${newEndpoint}/${id}`
        : `${this.baseEndpoint}/${id}`,
      config
    );

    return response;
  }

  async edit<T>(
    id: string,
    model: T,
    newEndpoint: string = "",
    config?: AxiosRequestConfig
  ) {
    return await axiosInstance.put<T>(
      newEndpoint
        ? `${this.baseEndpoint}/${newEndpoint}/${id}`
        : `${this.baseEndpoint}/${id}`,
      model,
      config
    );
  }
}
