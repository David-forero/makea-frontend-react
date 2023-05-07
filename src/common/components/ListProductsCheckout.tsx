import { useBasketContext } from "../../context/BasketContext";

type Props = {
    item: {
        title: string;
        price: number;
        id: string;
        imgUrl: string;
        description: string;
    }
};

const ListProductsCheckout = ({item}: Props) => {

    const {removeFromBasket} = useBasketContext()
  return (
    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
      <div className="w-1/4">
        <img
          src={item.imgUrl}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-3/4">
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-black leading-none text-gray-800 text-lg">
            {item.title}
          </p>
          {/* <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select> */}
        </div>

        <div className="w-4/5">
        <p className="text-sm leading-3 text-gray-400 pt-3 line-clamp-4">
          {item.description}
        </p>
        </div>

        <div className="flex items-center justify-between pt-5 pr-6">
          <div className="flex itemms-center">
            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={() => removeFromBasket(item.id)}>
              Eliminar de la cesta
            </p>
          </div>
          <p className="text-base font-black leading-none text-gray-800">
            ${item.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListProductsCheckout;
