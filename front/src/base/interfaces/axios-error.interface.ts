export interface IAxiosError {
  response: {
    data: { statusCode: string; message?: string };
    status: number;
  };
}
