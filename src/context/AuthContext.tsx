import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from "react";
import { post } from "../common/functions/http";

interface IAuthContext {
  user: any;
  signUp: any;
  signIn: any;
  auth: boolean;
}

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser(JSON.parse(localStorage.getItem("user") || ""));
      setAuth(JSON.parse(localStorage.getItem("auth") || ""));
    }
  }, [localStorage.getItem("auth")]);

  const signIn = useCallback(async (formData: IAuthContext, navigate: any) => {
    const { data } = await post("/signin", formData);
    setUser(data.data);
    setAuth(true);
    localStorage.setItem("user", JSON.stringify(data.data));
    localStorage.setItem("auth", JSON.stringify(true));
    navigate("/");
  }, []);

  const signUp = useCallback(
    async (formData: IAuthContext, navigate: any, setLoading: any) => {
      const { data } = await post("/signup", formData);

      if (data.status === 200) {
        setUser(data.data);
        setAuth(true);
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("auth", JSON.stringify(true));
        navigate("/");
      }

      setLoading(false);
    },
    []
  );

  return (
    <AuthContext.Provider
      value={{
        /*🔻  Variables 🔻*/
        user,
        auth,
        /*🔻  Funciones 🔻*/
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
