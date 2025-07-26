import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Card = ({ item }) => {
  return (
    <div className=" flex gap-5 p-4 mb-10 py-10 border">
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
              <button className="basket-btn">
                <FaMinus />
              </button>
              <span>{item.amount}</span>
              <button className="basket-btn">
                <FaPlus />
              </button>
            </div>

            <button className="basket-btn">
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
