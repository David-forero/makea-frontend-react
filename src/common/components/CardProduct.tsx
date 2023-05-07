import { useNavigate } from "react-router-dom";



type Props = {
  title: string;
  img: string;
  description: string;
  price: number;
  id: string;
}

const CardProduct = ({title, description, price, id, img}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="group relative cursor-pointer hover:opacity-60" onClick={() => navigate(`/furniture/${id}`)}>
      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <p className="line-clamp-1">
              {title}
            </p>
          </h3>
          <p className="mt-5 text-sm text-gray-500 line-clamp-2">{description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
};

export default CardProduct;