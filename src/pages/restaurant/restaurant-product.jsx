import React, { useEffect, useState } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { FaFire } from "react-icons/fa";
import Card from "./card";

const RestaurantProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  if (error) return <Error />;

  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <FaFire className="text-red-500" />
        Popüler
      </h2>

      <p className="text-gray-600">Restoranın en çok tercih edilen ürünleri</p>
      <div className="grid md:grid-cols-2 gap-5 mt-5  ">
        {data.map((item, key) => (
          <Card key={key} product={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantProduct;
