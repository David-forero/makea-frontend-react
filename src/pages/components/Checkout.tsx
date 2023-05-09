import { useNavigate } from "react-router-dom";
import ListProductsCheckout from "../../common/components/ListProductsCheckout";
import { useAuthContext } from "../../context/AuthContext";
import { useBasketContext } from "../../context/BasketContext";
import { useOrderContext } from "../../context/OrderContext";

const Checkout = ({ show, setShow }: any) => {
  const { items, total } = useBasketContext();
  const { createOrder } = useOrderContext();
  const { user, auth } = useAuthContext();
  const navigate = useNavigate();

  return (
    <>
      <div>
        {show && (
          <div
            className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0 z-50"
            id="chec-div"
          >
            <div
              className="w-full absolute z-50 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
              id="checkout"
            >
              <div className="flex md:flex-row flex-col justify-end" id="cart">
                <div
                  className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                  id="scroll"
                >
                  <div
                    className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <p
                      className="text-lg pl-2 leading-none"
                      onClick={() => setShow(false)}
                    >
                      Volver
                    </p>
                  </div>

                  {items.length > 0 ? (
                    items.map((item: any, i: number) => (
                      <ListProductsCheckout item={item} key={i} />
                    ))
                  ) : (
                    <h1 className="text-2xl text-gray-500 mt-10 text-center font-bold">
                      De momento no hay nada en la cesta...
                    </h1>
                  )}
                </div>
                <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                  <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                    <div>
                      <p className="text-4xl font-black leading-9 text-gray-800">
                        Resumen
                      </p>
                      <div className="flex items-center justify-between pt-16">
                        <p className="text-base leading-none text-gray-800">
                          Sub Total
                        </p>
                        <p className="text-base leading-none text-gray-800">
                          ${total}
                        </p>
                      </div>
                      {items.length > 0 && (
                        <div className="flex items-center justify-between pt-5">
                          <p className="text-base leading-none text-gray-800">
                            Delivery
                          </p>
                          <p className="text-base leading-none text-gray-800">
                            $15
                          </p>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                        <p className="text-2xl leading-normal text-gray-800">
                          Total
                        </p>
                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                          ${items.length > 0 ? total + 15 : 0}
                        </p>
                      </div>

                      {!auth ? (
                        <button
                          onClick={() => navigate('auth/signin')}
                          className="text-base leading-none w-full py-5 bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2  text-white rounded-md"
                        >
                          Debe iniciar session
                        </button>
                      ) : (
                        <button
                          disabled={items.length === 0}
                          onClick={() => createOrder(items, user.email)}
                          className="text-base leading-none w-full py-5 bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2  text-white rounded-md"
                        >
                          {items.length > 0
                            ? "Finalizar Compra"
                            : "No hay nada que comprar"}
                        </button>
                      )}

                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>
        {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
      </style>
    </>
  );
};

export default Checkout;
