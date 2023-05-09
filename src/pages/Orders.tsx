import { useOrderContext } from "../context/OrderContext"
import { useAuthContext } from "../context/AuthContext";
import { Order } from "./components";
import { useEffect, useState } from "react";

const Orders = () => {
  const {orders, getOrders} = useOrderContext();
  const {auth, user} = useAuthContext();

  useEffect(() => {
    if (user?.id) {
      getOrders(user?.id)
    }
  }, [user])


  return (
    <main className='max-w-screen-lg mx-auto p-10'>
            <h1 className="text-3xl border-b mb-2 pb-1 border-blue-700">
              Tus Ordenes 
            </h1>

            {
              auth ? (
                <h2>{orders?.length} Ordenes</h2>
              ) : (
                <h2>Por favor inicia sesión para ver tus ordenes</h2>
              )
            }

            <div className="mt-5 space-y-4">
              {orders && orders?.map(({id, amount, amountShipping, updatedAt, images}: any, i: number) => (
                <Order id={id} key={i} amount={amount} amountShipping={amountShipping} updatedAt={updatedAt} images={images} />
              ))}
            </div>
        </main>
  )
}

export default Orders