export interface ISession {
  isAdmin: boolean;
  isLogged: boolean;
  user: ISessionUser | null;
  token: string | null;
}

export interface ISessionUser {
  email: string;
  id: string;
}
