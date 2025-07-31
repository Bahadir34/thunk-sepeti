import { BiBasket } from "react-icons/bi";
import { IoRestaurant } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { restaurant } = useSelector((state) => state.restaurantReducer);

  const { basket } = useSelector((state) => state.basketReducer);
  return (
    <header className="shadow">
      <div className="container flex  justify-between items-center">
        <Link
          to={"/"}
          className="text-red-500 font-[900] text-2xl font-mono md:text-3xl"
        >
          Thunk Sepeti
        </Link>

        <div className="flex gap-5">
          <Link to={"/"} className="flex items-center gap-1 hover:underline">
            Yakınınızda {restaurant?.length}{" "}
            <IoRestaurant className="text-red-500" />
            <span className="max-md:hidden"> Restoran var</span>
          </Link>
          <Link
            to={"/cart"}
            className="px-3 py-2 hover:bg-red-100 transition flex items-center   rounded-full gap-2"
          >
            <BiBasket />
            <span>{basket?.reduce((total, el) => total + el.amount, 0)}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
