import { BaseService } from "@/base/services/base.service";
import { ISignUp } from "../../pages/public/signup-page/interfaces/signup.interface";
import { ILogin } from "@/interfaces/auth/login.interface";
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
    return this.axiosInstance.post(`${this.baseEndpoint}/login`, model);
  }
}
