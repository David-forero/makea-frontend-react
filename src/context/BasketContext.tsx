import { useContext, createContext, ReactNode, useState, useCallback, useEffect } from "react";

interface IBasketContext {
  total: number;
  items: any[];
  addToBasket: any;
  removeFromBasket: any;
}

interface IBasketProviderProps {
  children: ReactNode;
}

const BasketContext = createContext<IBasketContext>({} as IBasketContext);

const BasketProvider = ({ children }: IBasketProviderProps) => {

  const [total, setTotal] = useState<number>(0);
  const [items, setItems] = useState<any | null>([]);

  const addToBasket = useCallback((item: any) => {
    setItems([
      ...items,
      item
    ]);
  }, [items]);
  
  const removeFromBasket = useCallback((idItem: string) => {
    
    const index = items.findIndex((basketItem: any) => basketItem.id === idItem);

    let newBasket = [...items];

    if (index >= 0) {
      newBasket.splice(index, 1)
    }

    setItems(newBasket)
  }, [items]);

  useEffect(() => {
    setTotal(items.reduce((total: number, item: any) => total + item.price, 0))
  }, [items])
  
  

  return (
    <BasketContext.Provider
      value={
        {
          /*🔻  Variables 🔻*/
          total,
          items,
          /*🔻  Funciones 🔻*/
          addToBasket,
          removeFromBasket
        }
      }
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;

export const useBasketContext = () => useContext(BasketContext);
