import api from "../../api";
import ACTION_TYPES from "./actionTypes";

// asennkron thunk aksiyonu
// fonksiyon icerisinde fonksiyon return ederiz, icerideki fonksiyon async olabilir ve dispatch paremetresi alir.
// ozellikle async olarak belirtmeye gerek yoktur
export const getRestaurants = () => (dispatch) => {
  dispatch({ type: ACTION_TYPES.REST_LOADING });
  api
    .get("/restaurants")
    .then((res) => {
      console.log("RESTAURENTS : ", res.data);
      dispatch({ type: ACTION_TYPES.REST_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: ACTION_TYPES.REST_ERROR, payload: err.message })
    );
};
