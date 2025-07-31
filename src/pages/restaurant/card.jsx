import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createItem, updateItem } from "../../redux/actions/basketActions";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const { basket } = useSelector((state) => state.basketReducer);

  console.log(basket);

  const basketItem = basket.find((item) => item.id === product.id);
  const handleAdd = () => {
 
    basketItem
      ? dispatch(updateItem(basketItem.id, basketItem.amount + 1))
      : dispatch(createItem(product));
  };

  return (
    <div className="grid grid-cols-[1fr_115px] gap-3 border shadow p-3 rounded-lg hover:bg-red-100 hover:scale-[1.02] cursor-pointer transition duration-300">
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-xl font-semibold">{product.title}</p>
          <p>{product.desc}</p>
        </div>
        <p className="text-lg font-semibold">{product.price}₺</p>
      </div>
      <div className="relative">
        <img
          src={product.photo}
          alt={product.name}
          className="rounded-md object-cover size-full"
        />
        <button
          onClick={handleAdd}
          className="absolute end-2 bottom-2 bg-white rounded-full size-8 grid place-items-center font-bold hover:bg-red-100"
        >
          {basketItem?.amount ? basketItem?.amount : <FaPlus />}
        </button>
      </div>
    </div>
  );
};

export default Card;
