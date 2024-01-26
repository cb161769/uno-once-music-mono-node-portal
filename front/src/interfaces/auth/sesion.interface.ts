export interface ISession {
  isAdmin: boolean;
  isLogged: boolean;
  user: ISessionUser | null;
}

export interface ISessionUser {
  email: string;
  id: string;
}
