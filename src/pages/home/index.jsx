import { useSelector } from "react-redux";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Cart from "./cart";

const Home = () => {
  const { isLoading, error, restaurant } = useSelector(
    (store) => store.restaurantReducer
  );

 
  return (
    <div className="container">
      <h1 className="font-semibold text-xl md:text-2xl mb-5">
        Yakınınızdaki Restoranlar
      </h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5  ">
          {restaurant.map((item) => (
            <Cart key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
