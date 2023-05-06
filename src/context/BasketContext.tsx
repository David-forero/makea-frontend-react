import { useContext, createContext, ReactNode } from "react";

interface IBasketContext {
  // variables
}

interface IBasketProviderProps {
  children: ReactNode;
}

const BasketContext = createContext<IBasketContext>({} as IBasketContext);

const BasketProvider = ({ children }: IBasketProviderProps) => {
  return (
    <BasketContext.Provider
      value={
        {
          /*🔻  Variables 🔻*/
          /*🔻  Funciones 🔻*/
        }
      }
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;

export const useBasketContext = () => useContext(BasketContext);
