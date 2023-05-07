import { CardProduct } from "../common/components";
import { useFurnitureContext } from "../context/FurnitureContext";

const Home = () => {
  const {furnitures} = useFurnitureContext() 
  console.log(furnitures);
  
  return (
    <div>
      {/* Products */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
              furnitures ? furnitures.map((furniture: any) => (
                <CardProduct key={furniture.id} title={furniture.title} description={furniture.description} img={furniture.imgUrl} price={furniture.price} id={furniture.id} />
              )) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
