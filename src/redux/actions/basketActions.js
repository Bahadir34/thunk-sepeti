// sepetteki urunleri al reducer a aktar

import api from "../../api";
import ACTION_TYPES from "./actionTypes";

export const getBasket = () => (dispatch) => {
  dispatch({ type: ACTION_TYPES.BASKET_LOADING });

  api
    .get("/cart")
    .then((res) => {
      dispatch({ type: ACTION_TYPES.BASKET_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: ACTION_TYPES.BASKET_ERROR, payload: err.message })
    );
};

// sepette olmayan bir urunu ekleyecek aksiyon

export const createItem = (product) => (dispatch) => {
  const newItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantId: product.restaurantId,
    amount: 1,
  };

  // api ye sepete eklemek icin istek aticam ardindan istegin durumuna gore reducer a haber gondericem

  api
    .post("/cart", newItem)
    .then((res) =>
      dispatch({ type: ACTION_TYPES.CREATE_ITEM, payload: res.data })
    )
    .catch((err) => alert("Something went wrong!"));
};

export const updateItem = (id, newAmount) => (dispatch) => {
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    .then((res) =>
      dispatch({ type: ACTION_TYPES.UPDATE_ITEM, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ACTION_TYPES.BASKET_ERROR, payload: err.message })
    );
};

export const deleteItem = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() =>
      dispatch({ type: ACTION_TYPES.REMOVE_FROM_BASKET, payload: id })
    )
    .catch((err) => alert("Sepetten eleman silerken sorun olustu"));
};
