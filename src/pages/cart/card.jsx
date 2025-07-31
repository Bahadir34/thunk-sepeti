import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../../redux/actions/basketActions";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item);
  const handleInc = () => {
    dispatch(updateItem(item.id, item.amount + 1));
  };

  const handleDec = () => {
    console.log("ITEM.AMOUNT : ", item.amount);
    item.amount > 1
      ? dispatch(updateItem(item.id, item.amount - 1))
      : dispatch(deleteItem(item.id));
  };

  const handleRemove = () => {
    dispatch(deleteItem(item.id));
  };

  return (
    <div className=" flex gap-5 p-4 mb-10 py-10 border w-full">
      <img
        src={item.photo}
        alt={item.title}
        className="size-[150px] rounded-lg object-cover"
      />

      <div className="w-full flex flex-col justify-between">
        <h1 className="text-2xl font-semibold text-red-500">{item.title}</h1>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{item.price}₺</p>

          <div className="flex items-center text-xl gap-3">
            <div className="flex items-center gap-5  border rounded-lg ">
              <button onClick={handleDec} className="basket-btn">
                <FaMinus />
              </button>
              <span>{item.amount}</span>
              <button onClick={handleInc} className="basket-btn">
                <FaPlus />
              </button>
            </div>

            <button onClick={handleRemove} className="basket-btn">
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
