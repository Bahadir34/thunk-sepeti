import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader = ({ designs }) => {
  return (
    <div className={`flex items-center justify-center my-20 ${designs}`}>
      <FaSpinner className="animate-spin text-xl text-red-500" />
    </div>
  );
};

export default Loader;
