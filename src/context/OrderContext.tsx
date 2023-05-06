import { useContext, createContext, ReactNode } from "react";

interface IOrderContext {
  // variables
}

interface IOrderProviderProps {
  children: ReactNode;
}

const OrderContext = createContext<IOrderContext>({} as IOrderContext);

const OrderProvider = ({ children }: IOrderProviderProps) => {
  return (
    <OrderContext.Provider
      value={
        {
          /*🔻  Variables 🔻*/
          /*🔻  Funciones 🔻*/
        }
      }
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;

export const useOrderContext = () => useContext(OrderContext);
