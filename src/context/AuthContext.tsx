import { useContext, createContext, ReactNode, useState, useCallback } from "react";

interface IAuthContext {
  user: any
  signUp: any,
  signIn: any
}

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProviderProps) => {

  const [user, setUser] = useState(null);

  const signIn = useCallback(async () => {
      
  },[])
  
  const signUp = useCallback(async () => {
      
  },[])

  return (
    <AuthContext.Provider
      value={
        {
          /*🔻  Variables 🔻*/
          user,
          /*🔻  Funciones 🔻*/
          signIn,
          signUp
        }
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
