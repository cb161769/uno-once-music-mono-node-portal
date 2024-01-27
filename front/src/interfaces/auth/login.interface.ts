export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  data: string;
  statusCode: number;
}
