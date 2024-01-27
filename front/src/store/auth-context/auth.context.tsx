import { ISession } from "@/interfaces/auth/sesion.interface";
import { AuthService } from "@/services/auth-service/auth-service.service";
import { ReactNode, createContext, useEffect, useState } from "react";

export interface AuthContextProps extends ISession {
  setSession: (session: ISession) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAdmin: false,
  isLogged: false,
  user: null,
  token: null,
  setSession: () => {},
  logout: () => {},
});

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  //state
  const [session, setSession] = useState<ISession>({
    isAdmin: false,
    isLogged: false,
    user: null,
    token: null,
  });

  useEffect(() => {
    validateSession();
  }, []);

  //methods
  const validateSession = () => {
    const service = new AuthService();
    const s = service.getSession();

    if (s != null) {
      setSession(s);
    }
  };

  const logout = () => {
    const service = new AuthService();
    service.logout();
    setSession({
      isAdmin: false,
      isLogged: false,
      token: null,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...session, setSession, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
