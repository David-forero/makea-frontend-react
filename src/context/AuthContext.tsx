import { useContext, createContext, ReactNode } from "react";

interface IAuthContext {
  // variables
}

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  return (
    <AuthContext.Provider
      value={
        {
          /*🔻  Variables 🔻*/
          /*🔻  Funciones 🔻*/
        }
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
