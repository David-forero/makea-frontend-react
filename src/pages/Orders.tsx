import moment from "moment"
import { useOrderContext } from "../context/OrderContext"
import { useAuthContext } from "../context/AuthContext";
import { Order } from "./components";

const Orders = () => {
  const {orders} = useOrderContext();
  const {auth} = useAuthContext()
  return (
    <main className='max-w-screen-lg mx-auto p-10'>
            <h2 className="text-5xl text-blue-600 font-bold">
              Compra realizada con exito!
            </h2>
        </main>
  )
}

export default Orders