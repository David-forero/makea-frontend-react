import { useNavigate } from "react-router-dom";



type Props = {
  title: string;
  description: string;
  price: number;
  id: string;
}

const CardProduct = ({}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="group relative" onClick={() => navigate('/furniture/34124234234')}>
      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <p >
              <span aria-hidden="true" className="absolute inset-0"></span>
              Basic Tee
            </p>
          </h3>
          <p className="mt-1 text-sm text-gray-500">Black</p>
        </div>
        <p className="text-sm font-medium text-gray-900">$35</p>
      </div>
    </div>
  );
};

export default CardProduct;