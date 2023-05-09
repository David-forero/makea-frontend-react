import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { BsMinecartLoaded } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useBasketContext } from "../../context/BasketContext";
import { useOrderContext } from "../../context/OrderContext";
import { Checkout } from "../components";
import { AiOutlineUser } from "react-icons/ai";
import { useAuthContext } from "../../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const { items } = useBasketContext();
  const {auth} = useAuthContext();

  

  const { showCheckout, setShowCheckout } = useOrderContext();

  return (
    <>
      <Checkout show={showCheckout} setShow={setShowCheckout} />

      <header className="sticky top-0 z-10 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* left */}
        <div
          onClick={() => navigate("/")}
          className="relative flex items-center h-10 space-x-2 cursor-pointer my-auto hover:opacity-60"
        >
          <img src={logo} alt="logo makea" className="h-10 w-12" />
          <h2 className="text-blue-800 font-bold text-xl">Makea</h2>
        </div>

        {/* middle */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input
            type="text"
            value={searchInput}
            onChange={(e: any) => setSearchInput(e.target.value)}
            className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
            placeholder={"Estás buscando un mueble en específico?"}
          />

          <IoMdSearch className="hidden md:inline-flex h-8 w-8 bg-blue-800 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>

        {/* right */}
        <div className="flex items-center space-x-4 justify-end text-gray-500 ">
          {auth ? (
            <p>
              <AiOutlineUser className="h-5 w-5 cursor-pointer" />
            </p>
          ) : (
            <p
              className="hidden md:inline cursor-pointer"
              onClick={() => navigate("/auth/signin")}
            >
              Iniciar Sesión
            </p>
          )}

          <div
            onClick={() => setShowCheckout(true)}
            className="relative  link flex items-center cursor-pointer"
          >
            <span className="absolute text-[12px] top-0 right-6 md:-right-5 h-5 w-5 bg-blue-800 text-center rounded-full text-white flex justify-center items-center font-bold">
              {items && items.length}
            </span>

            <BsMinecartLoaded className="h-10" />
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
