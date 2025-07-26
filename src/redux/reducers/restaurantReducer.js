import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  error: null,
  restaurant: null,
};
const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REST_LOADING:
      return { ...state, isLoading: true };

    case ACTION_TYPES.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ACTION_TYPES.REST_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        restaurant: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducer;
