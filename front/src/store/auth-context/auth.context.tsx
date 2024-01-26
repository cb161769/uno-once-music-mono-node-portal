import { ISession } from "@/interfaces/auth/sesion.interface";
import { ReactNode, createContext, useState } from "react";

export interface AuthContextProps extends ISession {
  setSession: (session: ISession) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAdmin: false,
  isLogged: false,
  user: null,
  setSession: () => {},
});

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  //state
  const [session, setSession] = useState<ISession>({
    isAdmin: false,
    isLogged: false,
    user: null,
  });

  return (
    <AuthContext.Provider value={{ ...session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
};
