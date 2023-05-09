import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useCallback,
} from "react";
import { get, post } from "../common/functions/http";
import { loadStripe } from "@stripe/stripe-js";
interface IOrderContext {
  showCheckout: any;
  setShowCheckout: any;
  createOrder: any;
  getOrders: any;
  orders: any;
}

interface IOrderProviderProps {
  children: ReactNode;
}

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY || "",
  import.meta.env.STRIPE_SECRET_KEY || ""
);

const OrderContext = createContext<IOrderContext>({} as IOrderContext);

const OrderProvider = ({ children }: IOrderProviderProps) => {
  const [showCheckout, setShowCheckout] = useState<boolean>(false);
  const [orders, setOrders] = useState(null);

  const createOrder = useCallback(async (items: any, email: string) => {
    const stripe: any = await stripePromise;

    const { data } = await post("/create-checkout-session", {
      items: items,
      email,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: data.data.id,
    });

    if (result.error) alert(result.error.message);
  }, []);

  const getOrders = useCallback(async (idUser: string) => {
    const { data } = await get("/getorder/" + idUser);
    
    setOrders(data.data);
  }, []);

  return (
    <OrderContext.Provider
      value={{
        /*🔻  Variables 🔻*/
        showCheckout,
        setShowCheckout,
        orders,
        /*🔻  Funciones 🔻*/
        createOrder,
        getOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;

export const useOrderContext = () => useContext(OrderContext);
