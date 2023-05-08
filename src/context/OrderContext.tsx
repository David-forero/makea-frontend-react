import { useContext, createContext, ReactNode, useState, useCallback } from "react";
import { post } from "../common/functions/http";
import { loadStripe } from '@stripe/stripe-js';
interface IOrderContext {
  showCheckout: any;
  setShowCheckout: any;
  createOrder: any;
}

interface IOrderProviderProps {
  children: ReactNode;
}

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || '', import.meta.env.STRIPE_SECRET_KEY || '');

const OrderContext = createContext<IOrderContext>({} as IOrderContext);

const OrderProvider = ({ children }: IOrderProviderProps) => {
  const [showCheckout, setShowCheckout] = useState<boolean>(false);

  const createOrder = useCallback(async (items: any, email: string) => {
    const stripe: any = await stripePromise;

    const {data} = await post('/create-checkout-session', {
        items: items,
        email
    })

    const result = await stripe.redirectToCheckout({
      sessionId: data.data.id
    })

    if (result.error) alert(result.error.message)
    },[])
  

  return (
    <OrderContext.Provider
      value={
        {
          /*🔻  Variables 🔻*/
          showCheckout,
          setShowCheckout,
          /*🔻  Funciones 🔻*/
          createOrder
        }
      }
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;

export const useOrderContext = () => useContext(OrderContext);
