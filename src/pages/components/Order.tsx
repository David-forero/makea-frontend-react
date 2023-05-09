import moment from "moment";
import { currencyFormat } from "../../common/functions/format-currency";

type Props = {
  id: string;
  amount: number;
  amountShipping: number;
  updatedAt: any;
  images: any[];
};

const Order = ({
  id,
  amount,
  amountShipping,
  updatedAt,
  images,
}: Props) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-800">
        <div>
          <p className="font-bold text-xs">Orden</p>
          <p>{moment(updatedAt).format("DD MMM YYYY")}</p>
        </div>

        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            {currencyFormat(amount) } - Delivery{" "}
            {currencyFormat(amountShipping)}
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {images.length} items
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER #{id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images?.map((image, i) => (
            <img
              src={image}
              alt="items"
              key={i}
              className="h-20 object-contain sm:h-32"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
