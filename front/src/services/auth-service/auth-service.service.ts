import { BaseService } from "@/base/services/base.service";
import { ISignUp } from "../../pages/public/signup-page/interfaces/signup.interface";
import { ILogin, ILoginResponse } from "@/interfaces/auth/login.interface";
import { jwtDecode } from "jwt-decode";
import { IToken } from "@/interfaces/auth/token.interface";
import { SESSION_LOCAL_STORAGE } from "@/consts/local-storage";
import { ISession } from "@/interfaces/auth/sesion.interface";
export class AuthService extends BaseService {
  /**
   *
   */
  constructor() {
    super("auth");
  }

  register(model: ISignUp) {
    return this.create<ISignUp, object>(model, "register");
  }

  login(model: ILogin) {
    return this.axiosInstance.post<ILoginResponse>(
      `${this.baseEndpoint}/login`,
      model
    );
  }

  decodeToken(token: string) {
    const result = jwtDecode(token);
    return result as IToken;
  }

  storeSession(data: ISession) {
    localStorage.setItem(SESSION_LOCAL_STORAGE, JSON.stringify(data));
  }

  getSession() {
    const storage = localStorage.getItem(SESSION_LOCAL_STORAGE);
    if (!storage) return null;
    return JSON.parse(storage) as ISession;
  }

  logout() {
    localStorage.removeItem(SESSION_LOCAL_STORAGE);
  }
}
